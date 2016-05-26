var zOffset = 1,
    coxa = 1,
    femur = 2,
    tibia = 2.5,
    x = 5.5,
    y = 0,
    z = 0,
    l = 0,
    alpha = 0,
    a1 = 0,
    a2 = 0,
    beta = 0,
    //c = 0,
    gamma = 0;

console.log('Getting IK from:');
console.log('x:', x);
console.log('y:', y);
console.log('z:', z);

gamma = Math.atan(x / z);

console.log('gamma', gamma * 180 / Math.PI);

l = Math.sqrt(Math.pow(zOffset, 2) + Math.pow(y, 2));

console.log('L length', l);

a1 = Math.acos(zOffset / l);

console.log('a1', a1 * 180 / Math.PI);

a2 = Math.acos((Math.pow(tibia, 2) - Math.pow(femur, 2) - Math.pow(l, 2)) / (-2 * femur * l));

console.log('a2', a2 * 180 / Math.PI);

alpha = a1 + a2;

console.log('alpha', alpha * 180 / Math.PI);

beta = Math.acos((Math.pow(l, 2) - Math.pow(tibia, 2) - Math.pow(femur, 2)) / (-2 * tibia * femur));

console.log('beta', beta * 180 / Math.PI);