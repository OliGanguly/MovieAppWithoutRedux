

//custom hook is fun with logic
const useGenres = (selectedGenrus)=>{
if(selectedGenrus.length<1)return "";
const genresId=selectedGenrus.map((g)=>g.id)
return genresId.reduce((acc,curre)=>acc+","+curre)
}
export default useGenres;
