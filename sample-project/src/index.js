import moment from 'commons/moment';
import { sum } from 'commons/lodash';

function b() {
  // console.log(c, commons, moment, lodash, _);
  return moment(sum([1,2,3]));
}

console.log(b());
