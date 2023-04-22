import requests
import qi

class FactGetter:
    def __init__(self, session):
        print "My module init"
        
        self.api_key = 'jphDKGW5WLldjh+8mvXebg==SS9GtZQE4nqJXv54'
        self.api_url = 'https://api.api-ninjas.com/v1/facts'
        self.session = session
        self.memory = self.session.service('ALMemory')

    def get_fact(self):
        headers = {'X-Api-Key': self.api_key}
        params = {'limit': 1}
        response = requests.get(self.api_url, headers=headers, params=params)
   
        # Convert the API response to a list of Python dictionaries
        data = response.json()
            
        # Get the "fact" sentence from the first element of the list
        self.fact = data[0]["fact"]
        
        print self.fact
            
        # Return the fact
        return self.fact.decode("utf-8")

def main():
    app = qi.Application(url="tcp://10.50.99.3:9559")
    app.start()
    
    s = app.session
    my_module = FactGetter(s)
    s.registerService("facts",my_module)
    app.run()


if __name__ == "__main__":
    main()