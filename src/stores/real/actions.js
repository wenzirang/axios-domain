import http from "@/services/http";
import Services from '@/services/serviceConfig'

/**
 * test
 * @param {Function} commit 
 * @param {Object} state 
 * @returns {Promise} 
 */
export function getData({ commit, state }) {
  return new Promise((resolve, reject) => {
    http.$realMock
      .post(Services.real.TESTPOST)
      .then(ret => {
          resolve(ret);
      })
      .catch(err => {
        reject(err);
      })
  })
}