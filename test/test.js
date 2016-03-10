var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app')

var should = chai.should();

chai.use(chaiHttp)

describe('testing API routes', function() {

    it('should get the index page', function(done) {
        chai.request(server)
        .get('/')
        .end(function(err, res) {
            console.log(res.text)
            res.should.have.status(200);
            res.should.be.html;
            res.text.should.have.string('<title>index</title>');
            res.text.should.contain('<h2 class = "center-block">Featured Shirts</h2>');
            res.text.should.not.contain('<li><a href="#" class="getRad">Rad People</a></li>')
            done();
        })
    });

});