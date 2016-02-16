(function(){

    var cheerio = require('cheerio');
    var request = require('request');

    var host = 'http://vancouver.craigslist.ca';
    var CLIST = {};

    CLIST.Post = function(data){
        var self = this;

        self.ID = data.ID || '';
        self.Title = data.Title || '';
        self.Link = data.Link || '';
        self.Body = data.Body || '';
    }

    CLIST.GetPostsBySection = function(section, res){

        var url = host + '/search/' + section;

        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                var $ = cheerio.load(body);
                var list = [];

                $('a').each(function(i, element){
                    if($(this).data('id')){
                        var post = new CLIST.Post({
                            ID: $(this).data('id'),
                            Title: $(this).text(),
                            Link: host + $(this).attr('href')
                        });

                        list.push(post);
                    }
                });
                res.json(list);
            }
        });
    }

    CLIST.GetPostDetails = function(post, res){

        request(post.Link, function(error, response, body){
            if (!error && response.statusCode == 200) {

                var $ = cheerio.load(body);
                post.Body = $('#postingbody').html();
                res.json(post);
            }
        });
    }

    module.exports = CLIST;

}());