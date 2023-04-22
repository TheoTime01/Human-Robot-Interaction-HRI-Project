#! /usr/bin/env python
# -*- encoding: UTF-8 -*-


import qi
import argparse
import sys
import time
import signal
import requests


class Pepper(object):
    def __init__(self, app):
        """
        Initialization function of the class
        """
        # SuperClass
        super(Pepper, self).__init__()

        # Session start
        self.session = app

        # Get the service ALMemory
        self.memory = self.session.service("ALMemory")
        self.tts_service = self.session.service("ALTextToSpeech")


        try:
            # Connection to the robot tablet
            self.tabletService = self.session.service("ALTabletService")
            self.tabletService.loadApplication("projet_ihr_sibenaler_perrichet")
            self.tabletService.showWebview()

        except Exception as e:
            print ("Error was: "+ str(e))

        try:
            # Getting the service ALDialog
            self.ALDialog = self.session.service("ALDialog")
            self.ALDialog.resetAll()
            self.ALDialog.setLanguage("English")

            # Loading the topics directly as text strings
            self.topic_name = self.ALDialog.loadTopic("/home/nao/.local/share/PackageManager/apps/projet_ihr_sibenaler_perrichet/simple_en.top")

            # Activating the loaded topics
            self.ALDialog.activateTopic(self.topic_name)

            # Starting the dialog engine - we need to type an arbitrary string as the identifier
            # We subscribe only ONCE, regardless of the number of topics we have activated
            self.ALDialog.subscribe('simple')


        except Exception as e:
            print ("Error was: "+ str(e))

    #     # Initialize FactGetter class
    #     self.fact_getter = FactGetter(api_key='jphDKGW5WLldjh+8mvXebg==SS9GtZQE4nqJXv54')

    # def say_fact(self): 
    #     fact = self.fact_getter.get_fact()
    #     self.tts_service.say(fact)
        

    def run(self):
        try:
            raw_input("\n Press Enter when finished:")
        finally:
            # stopping the dialog engine
            self.ALDialog.unsubscribe('simple')


            # Deactivating the topic
            self.ALDialog.deactivateTopic(self.topic_name)
            
            # now that the dialog engine is stopped and there are no more activated topics,
            # we can unload our topic and free the associated memory
            self.ALDialog.unloadTopic(self.topic_name) 


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--ip", type=str, default="10.50.99.3",
                        help="Robot IP address. On robot or Local Naoqi: use '10.50.99.3'.")
    parser.add_argument("--port", type=int, default=9559,
                        help="Naoqi port number")

    args = parser.parse_args()
    session = qi.Session()
    try:
        session.connect("tcp://" + args.ip + ":" + str(args.port))
    except RuntimeError:
        print ("Can't connect to Naoqi at ip \"" + args.ip + "\" on port " + str(args.port) +".\n"
               "Please check your script arguments. Run with -h option for help.")
        sys.exit(1)
    demoMedia = Pepper(session)
    demoMedia.run()