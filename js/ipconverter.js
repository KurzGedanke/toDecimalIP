function getLineInput(){
    var hexIP = document.getElementById('id1');

    postResult(hexIP.value, toDec(splitIP(hexIP.value)));
}

function getURLParam(){
    // matches the url with an regual expression to get the 
    // ip out of the url
    var url = window.location.href;
    try{
        var params = url.match(/\?(.*)/g).toString().slice(1);
        postResult(params, toDec(splitIP(params)));
    }
    catch(err){
        console.log("No URL Paramater")
    }
}

function splitIP(ip){
    // splits the initial hex ip into a array

    var ipSplit = []
    ipSplit[0] = ip.substring(0, 2);
    ipSplit[1] = ip.substring(2, 4);
    ipSplit[2] = ip.substring(4, 6);
    ipSplit[3] = ip.substring(6, 8);

    return ipSplit;
}

function postResult(input, result){
    document.getElementById("oc").innerHTML = "0x"+input

    if(input.length == 8){
    
    // hexIP.value is the input of the form which then gets convertet to an array
    // and then to a decimal ip
    document.getElementById("result").innerHTML = result
    } else{
        document.getElementById("result").innerHTML = "Your IP doesn't have the length of a regular hex ip."
    }
}

function toDec(ipArray){
    var decIP = [0, ".", 0, ".", 0, ".", 0]
    
    // loops over decIP and converts ipArray into an decimal value
    // which get insertet betwen the "." (i*2), into decIP
    // notice that ipArray[i] contains always to values eg: "7F"
    for(var i = 0; i < 4; i++){
        decIP[i*2] = parseInt(ipArray[i], 16);
    }
    console.log(decIP)

    
    // return the decIP as a string with the "," replaced with whitespace
    return decIP.toString().replace(/,/g, '');
}