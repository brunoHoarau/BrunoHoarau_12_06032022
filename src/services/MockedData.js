import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from '../__mock__/data'

class MockedData {

  mockFormatBasiqueData = (id) => {
    for ( let user of USER_MAIN_DATA ){
      if( user.id === id ){
        return {
          id: user.id,
          firstName: user.userInfos.firstName,
          todayScore: user.todayScore,
          keyData: user.keyData
        }
      }
    }
  }

  mockFormatActivity = ( id ) => {
    for( let user of USER_ACTIVITY) {
      if ( user.userId === id ){
        let allKg = []
        let copyData = [...user.sessions];
        user.sessions.map((elmt, key) => {
          allKg.push(elmt.kilogram)
          let formatDay = elmt.day.split('-');
          elmt = formatDay[2];
          return (copyData[key].day = elmt );
          })
        return ({copyData, allKg})
      }
    }
  }

  mockFormatAverageActivityData = (id) => {
    for(let user of USER_AVERAGE_SESSIONS){
      if( user.userId === id ) {
        const weekDay = ['L','M','M','J','V','S','D'];
        let copyData = [...user.sessions]
        user.sessions.map( (elmt,key) =>{
            return copyData[key].day = weekDay[key];
          })
          return ({copyData});
      }
    }
  }

  mockFormatPerformanceData =  (id) => {
    for(let user of USER_PERFORMANCE){
      if(user.userId === id ){
        let copyData = [];
        const kindActivity = ["Intensité","Vitesse","Force","Endurance","Energie","Cardio"]
        const newArray = user.data.reverse()
        newArray.map( (elmt, key) => {
          elmt.kind = user.kind[elmt.kind]
          return copyData.push({ activity: kindActivity[key], value: elmt.value })
        })
        return ({copyData});
      }
    }
  }
}

export default MockedData;