import http from 'k6/http';
import { sleep } from 'k6';
import { Db } from 'mongodb';

export let options = {
  vus: 1000000,
  duration: '30s',
}

export default function() {
  postgres.get();
}