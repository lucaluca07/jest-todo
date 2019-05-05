import request from '../asyncFn';

describe('request', () => {
  it('test Promise', () => {
    expect(request(1)).resolves.toEqual({success: true});
    // expect(request(1)).rejects.toEqual({success: true});
    expect(request(-1)).rejects.toEqual({error: 'number不能小于0'});
  })

  it('test resolve with promise', () => {
    request(1).then(data => {
      expect(data).toEqual({success: true})
    })

  });

  it('test error with promise', () => {
    request(-1).then(data => {
      expect(data).toEqual({error: 'number不能小于0'})
    })
  });

  it('works resolve with async/await', async () => {
    const data = await request(4);
    expect(data).toEqual({success: true});
  });

  // 使用async/await来测试reject
  it('works reject with async/await', async () => {
    try {
      await request(-1);
    } catch (e) {
      expect(e).toEqual({
        error: 'number不能小于0'
      });
    }
  });
})