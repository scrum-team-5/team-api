const fetch = require("node-fetch2");

it("Test to get 'Hello Alejandro'",async ()=>{

    let name = "";//this is an emptry string

    const url = 'http://localhost:3000/alejo';
    const response = await fetch(url);

    name = await response.text();
    
    expect(name).toBe("Hello Alejandro");

})