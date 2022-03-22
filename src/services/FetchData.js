class FetchData{
    constructor(){
        this.baseUrl = 'http://localhost:3000/user/';
    }

    getBasiqueData = async (id) => {
        let url = `${this.baseUrl+id}`;
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
                    return data.data})
                .catch( err => console.error('Error: ' +  err))
    }

}

export default FetchData;