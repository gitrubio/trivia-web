import {decode }from 'he'
export default function useEncode() {

  return function(word : string){
    return decode(word)
  }
}
