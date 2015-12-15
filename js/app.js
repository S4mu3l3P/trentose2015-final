/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */

$(document).ready(function () {
    var SantaModel = {

        /* Initializes the model with a list of requests, 
         * and sets the first one as the current one 
         */
        init: function (list) {
            this.requests_list = requests;
            this.curr_id = 0;
            console.log(this.requests_list);
            console.log(this.requests_list[this.curr_id]);
        },

        /* It moves "current" to the next request */
        next: function () {
            this.curr_id++;
        },

        /* Returns the current request. 
         * If all requests have been processed (there is no current one), it returns null 
         */
        getCurrentRequest: function () {
            return this.requests_list[this.curr_id];
        },

        /* Packs the given item if it fulfills the current request.       
         * returns 1 if the given item fulfills the request (= answer)
         * returns 0 if the given item does not fulfill the request
         */
        pack: function (item) {

        }

    };



    var octopus = {

        init: function () {
            SantaModel.init();
            SantaView.init();
        },

        getCurrentRequest: function () {
            return SantaModel.getCurrentRequest();
        },
        
        next: function () {
           SantaModel.curr_id;
        }

    };

    var SantaView = {

        tmpl: '<li>YorN</li>',

        init: function () {
            $(".result").hide();
            var points = 0;
            this.populateSantaView(octopus.getCurrentRequest());
            $(".question-items li").click(function () {
                if(octopus.getCurrentRequest().answer==$(this).html()){
                    points++;
                    console.log(points);
                }
                octopus.next();
                SantaView.populateSantaView(octopus.getCurrentRequest());
            });
        },

        populateSantaView: function (curr) {
            var ris = '';
            var tmp = '';
            $(".question").html("");
            $(".question").html(curr.question);
            for (i in curr.options) {
                ris = this.tmpl.replace("YorN", curr.options[i]);
                tmp += ris;
            }
            //console.log(tmp);
            $(".question-items").html(tmp);
        }

    };

    octopus.init();
});
