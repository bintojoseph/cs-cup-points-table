import Posts from "./Posts";

const images = [
    // links
    // "https://i.ibb.co/2d4cW4q/1.png",
    // "https://i.ibb.co/2d4cW4q/2.png",
    // "https://i.ibb.co/2d4cW4q/3.png",
  ];

function Winner() {
    if (images.length === 0) return <h1 className="font-['calvera'] font-semibold text-lg mb-10">Will be updated soon!</h1>;
    else
    return (
        <>
        <Posts images={images} />
        
        </>
    )
}
export default Winner