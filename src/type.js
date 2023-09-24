'use strict';

new TypeIt('.home__title--strong',{
    loop: true, //반복
    speed: 100, //타자 속도
})
.move(-20)
.type('Amazing ')
.pause(1000)
.move(null, {to: 'END'})
.delete()
.type('Front-end Engineer')
.pause(2000)
.move(-9)
.delete(9)
.type('Back-end')
.pause(2000)
.delete(8)
.type('Full-stack')
.pause(2000)
.move(9)
.delete()
.go();