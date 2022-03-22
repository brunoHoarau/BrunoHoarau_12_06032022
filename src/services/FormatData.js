class FormatData {

  formatBasiqueData = ( data ) => {
    console.log(data)
    return {
      id: data.id,
      firstName: data.userInfos.firstName,
      todayScore: data.todayScore
    }
  }
 
  formatActivity = ( data ) => {
    let allKg = []
    let copyData = [...data.sessions];
    data.sessions.map((elmt, key) => {
      allKg.push(elmt.kilogram)
      let formatDay = elmt.day.split('-');
      elmt = formatDay[2];
      return (copyData[key].day = elmt );
      })
    return ({copyData, allKg})
  }

  formatAverageActivityData = (data) => {
    const weekDay = ['L','M','M','J','V','S','D'];
    let copyData = [...data.sessions]
    data.sessions.map( (elmt,key) =>{
      return copyData[key].day = weekDay[key];
    })
    return ({copyData});
  }

  formatPerformanceData =  (data) => {
          let copyData = [];
          const kindActivity = ["Intensité","Vitesse","Force","Endurance","Energie","Cardio"]
          const newArray = data.data.reverse()
          newArray.map( (elmt, key) => {
           elmt.kind = data.kind[elmt.kind]
          return copyData.push({ activity: kindActivity[key], value: elmt.value })
          })
          return ({copyData});
        }

}

export default FormatData;