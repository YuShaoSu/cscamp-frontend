
import shajs from 'sha.js'

export function sha512(str) {
  return shajs('sha512').update(str).digest('hex')
}
