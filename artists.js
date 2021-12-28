var url = require('url')
var cheerio = require('cheerio');
var request = require('request');
var path = require('path');
var express = require("express");
const { getSystemErrorMap } = require('util');
var app = express();
var finalarr = [];
var artistsarr = process.argv.slice(2); //makes array and starts it at the 3rd argument 
var count = 0

const newarr = [25];
const newart = [25];


request('http://www.popvortex.com/music/charts/top-rap-songs.php', function (error, response, html) {
	if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        // Not to be confused with forEach, this is jQuery
        $('em.artist').each(function(i, element) {
                 newarr[i] = ($(this).text());
                 

                 
        });
        $('cite.title').each(function(i, element) {
                newart[i] = ($(this).text());
            

            
   });
        
    }
    var arr = [];
    for(let i = 0; i <25; i++){
    arr[i] =(newarr[i] + " " + newart[i]);
    
    }
    //for artistsarr length 
    for (let i = 0; i < artistsarr.length; i ++){
    // run inner loop that goes through every name and if it contained then print it out 
        for(let j = 0; j < arr.length; j++){
            if(arr[j].includes(artistsarr[i])){
                finalarr[count] = arr[j]
                count++
            }
            
        }
        
    }
     
        
        
    console.log(finalarr);
    
});



