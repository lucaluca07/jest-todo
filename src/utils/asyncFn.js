const asyncFn = (number) => {
  return new Promise((resolve, reject) => {
    number >= 0 ? resolve( {success: true} ) : reject({error: 'number不能小于0'})
  })
}

export default asyncFn;