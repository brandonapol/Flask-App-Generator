const token = "n/a"

export const server_calls = {

    
    getdata: async (test: string) => {
        window.location.href = `https://final-flask-api.herokuapp.com/api/getdata`;
    //     const response = await fetch(`http://127.0.0.1:5000/api/getdata`,{
        // https://final-flask-api.herokuapp.com/api/getdata
    //         // mode: 'no-cors',
    //         method: 'GET',
    //         headers: { 
    //             'Content-Disposition': 'attachment; filename=test.txt',
    //             'Content-Type': 'text/plain; charset=utf-8'
    //         }
    //     });

    //     if (!response.ok){
    //         throw new Error('Failed to fetch data from server')
    //     }
    //     console.log(response)
    //     console.log('I am here')

    //     return await response
    },
    createData: async (data: any = {}) => {
        const response = await fetch(`https://myfirewebsite.herokuapp.com/api/cars`,{
        // This will never be called 
        });
    },

    update: async (id: string, data: any = {}) => {
        // this will never be called
    },

    delete: async (id: string) => {
        // const response = await fetch(`https://myfirewebsite.herokuapp.com/api/cars/${id}`,{
            // mode: 'no-cors',
            // method: 'DELETE',
            // this will never be called
            
        ;
    }
}
