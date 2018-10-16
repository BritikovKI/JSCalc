const count = require("/home/chapay/WebstormProjects/Calculator/calculator.js");
const fs = require('fs-extra');
const assert = require('assert');
const { COPYFILE_EXCL } = fs.constants;
const http = require('http');
// console.log("http: ", fs);

describe('Calculator tests', () => {
    let app;
    before((done) => {
        console.log("Tests started")
        done()
    });


    // Написать тесты на
    // get запрос к http://localhost:3333  => вернет index.html
    // get запрос к http://localhost:3333/file.txt => вернет file.txt

    it('Valid sum test',  (done) => {
        let a = Math.random()*100000;
        let b = Math.random()*100000;
        assert.equal(count(a,b,'+'),a+b);
        done();
    });

    it('Valid sum float test',  (done) => {
        let a = 2.5;
        let b = 11.32;
        assert.equal(count(a,b,'+'),2.5+11.32);
        done();
    });

    it('Valid sum negative test',  (done) => {
        let a = 2.5;
        let b = -11.32;
        assert.equal(count(a,b,'+'),2.5+(-11.32));
        done();
    });

    it('Valid sub test', (done) => {
        let a = Math.random()*100000;
        let b = Math.random()*100000;
        assert.equal(count(a,b,'-'),a-b);
        done();
    });

    it('Valid sub float test', (done) => {
        let a = 7.3;
        let b = 2.1;
        assert.equal(count(a,b,'-'),7.3-2.1);
        done();
    });

    it('Valid negative float test', (done) => {
        let a = 7.3;
        let b = 11.1;
        assert.equal(count(a,b,'-'),7.3-11.1);
        done();
    });


    it('Valid div test',  (done) => {
        let a = Math.random()*100000;
        let b = Math.random()*100000;
        assert.equal(count(a,b,'/'),a/b);
        done();
    });

    it('Valid div float test',  (done) => {
        let a = 22;
        let b = 33;
        assert.equal(count(a,b,'/'),22/33);
        done();
    });

    it('Valid div float negative test',  (done) => {
        let a = -22;
        let b = 33;
        assert.equal(count(a,b,'/'),-22/33);
        done();
    });

    it('Valid mult test',  (done) => {
        let a = Math.random()*100000;
        let b = Math.random()*100000;
        assert.equal(count(a,b,'*'),a*b)
        done();
    });

    it('Valid mult float test',  (done) => {
        let a = 0.5;
        let b = 0.7;
        assert.equal(count(a,b,'*'),0.5*0.7)
        done();
    });

    it('Valid mult float double negative test',  (done) => {
        let a = -0.5;
        let b = -0.7;
        assert.equal(count(a,b,'*'),0.5*0.7)
        done();
    });

    it('Valid mult float negative test',  (done) => {
        let a = -0.5;
        let b = 0.7;
        assert.equal(count(a,b,'*'),-0.5*0.7)
        done();
    });

    it('Not valid div test',  (done) => {
        let a = Math.random()*100000;
        let b = 0;
        assert.equal(count(a,b,'/'),"Деление на ноль!");
        done();
    });



    after((done) => {
       console.log('Tests Finished');
       done()
    });

});
