class FetchData{
    constructor(){
        this.baseUrl = 'http://localhost:3000/user/';
        // this.loading = true;
    }
    
    static setIsLoad = false;
    
    getLoading = (id) => {
        let loading;
        let url =`${this.baseUrl+id}`;
        return fetch(url)
            .then( res => {
                loading = true
                return( loading)
            })
            .catch ( err => {
                console.log(err);
                loading = false;
                console.log(err.status)
                return({ loading })
            })
        }

    getBasiqueData = async (id) => {
        let url =`${this.baseUrl+id}` ;
        return fetch(url)
        .then( res => {
            if (res.status !== 200) { console.error(res.status)}
            return (res.json())
        })
        .then ( data => {
            this.loading = true;
                return (data.data)
              })
        .catch( err =>{ console.error('Error: ' +  err); return false; })
    }

    getActivityData = async (id) => {
        let url= `${this.baseUrl+id}/activity`
        return fetch(url)
                .then( res => {
                    if (res.status !== 200) { console.error(res.status)} 
                    return res.json()
                })
            .then ( data => {
                    return data.data
                  })
            .catch( err => console.error('Error: ' +  err))
    }

    getAverageActivityData = async (id) => {
        let url= `${this.baseUrl+id}/average-sessions`
        return fetch(url)
                .then( res => {
                    if (res.status !== 200) { console.error(res.status)} 
                    return res.json()
                })
                .then ( data => {
                    return data.data
                  })
            .catch( err => console.error('Error: ' +  err))
    }


    getPerformanceData = async (id) => {
        let url= `${this.baseUrl+id}/performance`
        return fetch(url)
                .then( res => {
                    if (res.status !== 200) { console.error(res.status)} 
                    return res.json()
                })
                .then ( data => {
                    return data.data
                  })
            .catch( err => console.error('Error: ' +  err))
    }

}

export default FetchData;