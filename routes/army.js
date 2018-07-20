module.exports = (router, request)=>{
  router.post('/',async(req,res)=>{
    var apiurl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?region=kr&location=" + req.body.x + "," + req.body.y + "&radius=3000&type=subway_station&key=AIzaSyC0WvUEVSxSbcLhUw_ndmcLhf2_HkuDs5c";
    request(apiurl, (err, response, body)=>{
      let resultArr = [];
      var bodyresult;
      bodyresult = JSON.parse(body);
      for(i=0; i<bodyresult.results.length ;i++){
        var pushsome = bodyresult.results[i].geometry.location;
        pushsome.name = bodyresult.results[i].name;
        resultArr.push(pushsome)
      }
      if(resultArr == null) return res.status(404).json({message : "대피소가 없습니다. 꼭 살아남으시길 바랍니다."})
      else return res.status(200).json({result : resultArr});
    })
  })
  return router;
}
