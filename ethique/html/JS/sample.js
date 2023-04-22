$(document).ready(function () {
    session = new QiSession();

    $('#page_start').show();
    $('#page_resistance').hide();
    $('#page_demo_pdt').hide();
    $('#page_demo_ampere').hide();
    $('#page_demo_faraday').hide();
    $('#page_random_fact').hide();
    $('#page_selection').hide();
    $('#page_vide').hide();    


    function raise(event, value) {
        session.service("ALMemory").done(function(ALMemory) {
            ALMemory.raiseEvent(event, value);
        });
    }

    session.service("ALMemory").done(function(ALMemory) {

        ALMemory.subscriber("projet_ihr_sibenaler_perrichet/Page/Empty").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#page_vide').show();
                $('#page_demo_pdt').hide();
                $('#page_start').hide();
                $('#page_resistance').hide(); 
                $('#page_demo_ampere').hide();
                $('#page_demo_faraday').hide();
                $('#page_random_fact').hide();
                $('#page_selection').hide();
            });
        });

        ALMemory.subscriber("projet_ihr_sibenaler_perrichet/Page/Start").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#page_vide').hide();
                $('#page_demo_pdt').hide();
                $('#page_start').show();
                $('#page_resistance').hide(); 
                $('#page_demo_ampere').hide();
                $('#page_demo_faraday').hide();
                $('#page_random_fact').hide();
                $('#page_selection').hide();
            });
        });



        ALMemory.subscriber("projet_ihr_sibenaler_perrichet/Page/Resistance").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#page_vide').hide();
                $('#page_demo_pdt').hide();
                $('#page_start').hide();
                $('#page_resistance').show(); 
                $('#page_demo_ampere').hide();
                $('#page_demo_faraday').hide();
                $('#page_random_fact').hide();
                $('#page_selection').hide(); 
            });
        });

        ALMemory.subscriber("projet_ihr_sibenaler_perrichet/Page/DemoPdt").done(function(subscriber) {
            subscriber.signal.connect(function() {
                $('#page_vide').hide();
                $('#page_demo_pdt').show();
                $('#page_start').hide();
                $('#page_resistance').hide(); 
                $('#page_demo_ampere').hide();
                $('#page_demo_faraday').hide();
                $('#page_random_fact').hide();
                $('#page_selection').hide();
            });
        });

        ALMemory.subscriber("projet_ihr_sibenaler_perrichet/Page/DemoAmpere").done(function(subscriber) {
            subscriber.signal.connect(function() {
                $('#page_vide').hide();
                $('#page_demo_pdt').hide();
                $('#page_start').hide();
                $('#page_resistance').hide(); 
                $('#page_demo_ampere').show();
                $('#page_demo_faraday').hide();
                $('#page_random_fact').hide();
                $('#page_selection').hide();
            });
        });

        ALMemory.subscriber("projet_ihr_sibenaler_perrichet/Page/DemoFaraday").done(function(subscriber) {
            subscriber.signal.connect(function() {
                $('#page_vide').hide();
                $('#page_demo_pdt').hide();
                $('#page_start').hide();
                $('#page_resistance').hide(); 
                $('#page_demo_ampere').hide();
                $('#page_demo_faraday').show();
                $('#page_random_fact').hide();
                $('#page_selection').hide();
            });
        });

        ALMemory.subscriber("projet_ihr_sibenaler_perrichet/Page/Selection").done(function(subscriber) {
            subscriber.signal.connect(function() {
                $('#page_vide').hide();
                $('#page_demo_pdt').hide();
                $('#page_start').hide();
                $('#page_resistance').hide(); 
                $('#page_demo_ampere').hide();
                $('#page_demo_faraday').hide();
                $('#page_random_fact').hide();
                $('#page_selection').show();
            });
        });   
    });

	$('#page_start').on('click', function() {
        console.log("click Start");
        raise('SimpleWeb/Start', 1)
    });
});
