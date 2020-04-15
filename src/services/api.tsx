const resumeApi = {
    fetchData(type: string) {
      return fetch(`https://raw.githubusercontent.com/iamdevlinph/data/master/${type}.json`, {
        method: 'GET',
      }).catch(() => {
        // console.log('Fail zone');
      }).then((res: any) => {
        let flag;
        if (res.ok) {
          flag = Promise.resolve(res);
        }
        // console.log('error', res);
        return flag;
      });
    },
  };
  
  export default resumeApi;