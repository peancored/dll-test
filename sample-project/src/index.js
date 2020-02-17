import {moment, lodash} from 'commons';

function b() {
  return moment(lodash.sum([1,2,3]));
}

console.log(b());
