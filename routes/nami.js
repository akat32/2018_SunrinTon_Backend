module.exports = (router, request)=>{
  router.post('/', async(req,res)=>{
    res.status(200).json({message : "빨리 높은 건물로 도망가세요!"});
  })
  return router;
}
