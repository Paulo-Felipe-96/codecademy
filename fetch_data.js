const CatsModule = (() => {
  function getCatFactsInfo() {
    return new Promise((resolve, reject) => {
      fetch("https://cat-fact.herokuapp.com/facts")
        .then((res) => res.json())
        .then((facts) => {
          const hasFacts = facts ? facts : {};
          resolve(hasFacts);
        })
        .catch((err) => reject(console.log(err)));
    });
  }

  return { getCatFactsInfo };
})();

const { getCatFactsInfo } = CatsModule;

getCatFactsInfo();
