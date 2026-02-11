import shoes from "../public/shoes color all.webp"
import modelshoes from "../public/shoes model.png"
import modelDGJG from "../public/Shoes model DGJG.png"
import ModelKIUMETY from "../public/ModelKIUSMETY.png"
import gaolkeeper from "../public/spraygaol.png"
import gaolkeeper4 from "../public/gaolkeeper4pic.png"
import shirt from "../public/shirt gaol.png"
function App() {
  

  return (
    <div>
    
   <div className="flex justify-between bg-white px-2 py-4">
    <h1 className="font-light text-2xl font-serif">Shop Sport⚽ </h1>
    <nav className="flex gap-15 font-serif text-xl ml-auto ">
      <a href="#">Home</a>
      <a href="#">Pruduct</a>
      <a href="#">About</a>
    </nav>
    </div>
   <div className="text-amber-50 text-center text-5xl p-7 font-serif font-bold">Shoes football</div>
   <img src={shoes} className="w-full h-100 object-center rounded-lg" />

   <div className="flex item-center justify-center m-5">
    <div className="px-3 py-3 bg-blue-500 rounded-full font-bold w-fit">
      <a href="https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638556&hvpos=&hvnetw=g&hvrand=4464452843329505121&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1009829&hvtargid=kwd-10573980&hydadcr=2246_13649807" target="_blank">
      <button>Cheak it in the Website</button>
      </a>
    </div>
   </div>

{/* Model Ti1 */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15">
      {/* product 1 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/shoes black-white.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">HRJR KIDS SOCCER <br />Color:White
        </h1>
        <p className="text-black">Kids Soccer Cleats Boys Girls Training Football Cleats Youth High-top Soccer Shoes for Little/Big Professional Athletic Outdoor Football Shoes</p>
        <a href="https://www.amazon.com/HRJR-Training-Football-High-top-Professional/dp/B0FGQ3L3B2?ref_=ast_sto_dp&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

      {/* product 2 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/shoes black.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">HRJR KIDS SOCCER <br />Color:Black
        </h1>
        <p className="text-black">Kids Soccer Cleats Boys Girls Training Football Cleats Youth High-top Soccer Shoes for Little/Big Professional Athletic Outdoor Football Shoes</p>
        <a href="https://www.amazon.com/HRJR-Training-Football-High-top-Professional/dp/B0FGQ664FZ?ref_=ast_sto_dp&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

      {/* product 3 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/Blue.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">HRJR KIDS SOCCER <br />Color:Blue
        </h1>
        <p className="text-black">Kids Soccer Cleats Boys Girls Training Football Cleats Youth High-top Soccer Shoes for Little/Big Professional Athletic Outdoor Football Shoes</p>
        <a href="https://www.amazon.com/HRJR-Training-Football-High-top-Professional/dp/B0FGQ7R16Y?ref_=ast_sto_dp&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>
</div>

   <img src={modelshoes} className="w-full h-100 object-center rounded-lg" />

{/* Model Ti2 */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15">
      {/* product 4 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/shoes pink.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">DGJG <br/>Color:Pink
        </h1>
        <p className="text-black">Youth Soccer Cleats Mens Training Football Cleats Lightweight Womens High-top Soccer Shoes AG, Tacos de Futbol para Hombre</p>
        <a href="https://www.amazon.com/DGJG-Womens-Soccer-Cleats-Lightweight/dp/B0FGJD4GFR/ref=pd_ci_mcx_di_int_sccai_cn_d_sccl_1_4/144-9446479-0401538?pd_rd_w=WBUdp&content-id=amzn1.sym.751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_p=751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_r=DB0KYVDSD542XYESGDQW&pd_rd_wg=qCBuu&pd_rd_r=939e250e-5144-4cd3-93fc-460646c42201&pd_rd_i=B0FGJD4GFR&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

      {/* product 5 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/shoes black DGJG.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">DGJG<br />Color:Black
        </h1>
        <p className="text-black">Youth Soccer Cleats Mens Training Football Cleats Lightweight Womens High-top Soccer Shoes AG, Tacos de Futbol para Hombre</p>
        <a href="https://www.amazon.com/DGJG-Womens-Soccer-Cleats-Lightweight/dp/B0FGJLB7T6/ref=pd_ci_mcx_di_int_sccai_cn_d_sccl_1_4/144-9446479-0401538?pd_rd_w=WBUdp&content-id=amzn1.sym.751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_p=751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_r=DB0KYVDSD542XYESGDQW&pd_rd_wg=qCBuu&pd_rd_r=939e250e-5144-4cd3-93fc-460646c42201&pd_rd_i=B0FGJD4GFR&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

      {/* product 6 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/shoes white DGJG.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">DGJG<br />Color:white
        </h1>
        <p className="text-black">Youth Soccer Cleats Mens Training Football Cleats Lightweight Womens High-top Soccer Shoes AG, Tacos de Futbol para Hombre</p>
        <a href="https://www.amazon.com/DGJG-Womens-Soccer-Cleats-Lightweight/dp/B0FGJG6YQ3/ref=pd_ci_mcx_di_int_sccai_cn_d_sccl_1_4/144-9446479-0401538?pd_rd_w=WBUdp&content-id=amzn1.sym.751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_p=751acc83-5c05-42d0-a15e-303622651e1e&pf_rd_r=DB0KYVDSD542XYESGDQW&pd_rd_wg=qCBuu&pd_rd_r=939e250e-5144-4cd3-93fc-460646c42201&pd_rd_i=B0FGJD4GFR&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>
    </div> 
     
 <img src={modelDGJG} className="w-full h-100 object-center rounded-lg" />

{/* Model Ti3 */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15">
      {/* product 7 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/KIUMETY black.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">KIUMETY <br />Color:Black
        </h1>
        <p className="text-black">Soccer Cleats for Mens Womens Indoor Turf Football Shoes Training Sneaker</p>
        <a href="https://www.amazon.com/KIUSMETY-Lightweight-Training-Football-Outdoor/dp/B0DZNMT4Z7/ref=pd_rhf_dp_s_pd_sbs_rvi_d_sccl_2_7/144-9446479-0401538?pd_rd_w=zRgkm&content-id=amzn1.sym.6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_p=6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_r=C81KAZE5NA9VVY93VXA7&pd_rd_wg=kikGr&pd_rd_r=b20f72ca-8494-483a-8d06-3ea0a6951a9b&pd_rd_i=B0DZNG2LNG&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

      {/* product 8 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center ">
        <img src="public/KIUMETY blue.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">KIUMETY <br />Color:Blue
        </h1>
        <p className="text-black">Soccer Cleats for Mens Womens Indoor Turf Football Shoes Training Sneaker</p>
        <a href="https://www.amazon.com/KIUSMETY-Lightweight-Training-Football-Outdoor/dp/B0DZNC2CMR/ref=pd_rhf_dp_s_pd_sbs_rvi_d_sccl_2_7/144-9446479-0401538?pd_rd_w=zRgkm&content-id=amzn1.sym.6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_p=6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_r=C81KAZE5NA9VVY93VXA7&pd_rd_wg=kikGr&pd_rd_r=b20f72ca-8494-483a-8d06-3ea0a6951a9b&pd_rd_i=B0DZNG2LNG&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-500 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

      {/* product 9 */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/KIUMETY pink.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">KIUMETY<br />Color:Pink
        </h1>
        <p className="text-black">Soccer Cleats for Mens Womens Indoor Turf Football Shoes Training Sneaker</p>
        <a href="https://www.amazon.com/KIUSMETY-Lightweight-Training-Football-Outdoor/dp/B0G4QYSGB6/ref=pd_rhf_dp_s_pd_sbs_rvi_d_sccl_2_7/144-9446479-0401538?pd_rd_w=zRgkm&content-id=amzn1.sym.6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_p=6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_r=C81KAZE5NA9VVY93VXA7&pd_rd_wg=kikGr&pd_rd_r=b20f72ca-8494-483a-8d06-3ea0a6951a9b&pd_rd_i=B0DZNG2LNG&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-300 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>
</div>

<img src={ModelKIUMETY} className="w-full h-100 object-center rounded-lg" />
    

    {/* Gaolkeeper Spray */}
   <div className="text-amber-50 text-center text-5xl p-7 font-serif font-bold">Gaolkeeper Spray</div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15">

    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/Gaolkeeper spray green.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">Goalkeeper Glove Spray<br/>Style: Glove Grip Spray
        </h1>
        <p className="text-black">Goalkeeper Glove Spray Bundle, Goalie Gloves Glue, Grip Boost Football Gloves Contains MSDS Certified 100ml Goalkeeper Grip Spray + 100ml Goalkeeper Glove Wash & Prepare Spray</p>
        <a href="https://www.amazon.com/dp/B0CYL76GZG/ref=sspa_dk_detail_0?pd_rd_i=B0CYL76GZG&pd_rd_w=Ipyig&content-id=amzn1.sym.7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_p=7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_r=J7PZMD2H6FT0B8268JCK&pd_rd_wg=nCHM5&pd_rd_r=550199dd-7385-49f6-b6b9-11c968ece1a2&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-300 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/spray blue.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">Goalkeeper Glove Spray <br/>Style: Glove Grip Spray
        </h1>
        <p className="text-black">Goalkeeper Glove Spray Bundle, Goalie Gloves Glue, Grip Boost Football Gloves Contains MSDS Certified 100ml Goalkeeper Grip Spray + 100ml Goalkeeper Glove Wash & Prepare Spray</p>
        <a href="https://www.amazon.com/CLBORT-Sports-Equipment-Cleaner-Certified/dp/B0CP3MF359/ref=sims_dp_d_dex_ai_rank_model_1_d_v1_d_sccl_1_1/144-9446479-0401538?pd_rd_w=3t1Zd&content-id=amzn1.sym.bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_p=bb4a0aac-c2b4-4b4b-a0c8-9aa89b28dce3&pf_rd_r=ZZ618411KE03VPKA0SA1&pd_rd_wg=iKc0a&pd_rd_r=35294001-0b0c-4700-87d9-fc6c72c12bd6&pd_rd_i=B0CP3MF359&th=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-300 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

       <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/spray 3color.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">Goalkeeper Glove Spray<br/>Style: Glove Grip Spray
        </h1>
        <p className="text-black">Goalkeeper Glove Spray Bundle, Goalie Gloves Glue, Grip Boost Football Gloves Contains MSDS Certified 100ml Goalkeeper Grip Spray + 100ml Goalkeeper Glove Wash & Prepare Spray</p>
        <a href="https://www.amazon.com/dp/B0CYL76GZG/ref=sspa_dk_detail_0?pd_rd_i=B0CYL76GZG&pd_rd_w=Ipyig&content-id=amzn1.sym.7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_p=7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_r=J7PZMD2H6FT0B8268JCK&pd_rd_wg=nCHM5&pd_rd_r=550199dd-7385-49f6-b6b9-11c968ece1a2&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-300 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>
 </div>

<img src={gaolkeeper} className="w-full h-100 object-center rounded-lg" />
<img src={gaolkeeper4} className="w-full h-100 object-center rounded-lg" />
{/* gloves gaolkeeper */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15">

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/gloves red.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">ARSH SPORTS<br/>Color:Red</h1>
        <p className="text-black">Soccer Goalie Gloves,Football Goalkeeper Gloves for Kids Boys Youth Children Double Wrist Protection Along 4mm Super Grip Palm</p>
        <a href="https://www.amazon.com/dp/B0DKXFKJS8/ref=sspa_dk_detail_2?pd_rd_i=B0DKXFKJS8&pd_rd_w=dR4M9&content-id=amzn1.sym.30062d3d-2c31-47f3-af26-55177a669bb5&pf_rd_p=30062d3d-2c31-47f3-af26-55177a669bb5&pf_rd_r=VRK0JTHXTNFMZJ68W2F7&pd_rd_wg=63Ugt&pd_rd_r=1ad9b3d9-3064-446b-aa86-8e50a44b882c&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-300 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>
      

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/glovers yellow.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">ARSH SPORTS<br/>Color:yellow</h1>
        <p className="text-black">Soccer Goalie Gloves,Football Goalkeeper Gloves for Kids Boys Youth Children Double Wrist Protection Along 4mm Super Grip Palm</p>
        <a href="https://www.amazon.com/dp/B0CRDJLHZ6/ref=sspa_dk_detail_2?pd_rd_i=B0CRDJLHZ6&pd_rd_w=GVi2w&content-id=amzn1.sym.30062d3d-2c31-47f3-af26-55177a669bb5&pf_rd_p=30062d3d-2c31-47f3-af26-55177a669bb5&pf_rd_r=0Y8164CYJKKTAJCYET00&pd_rd_wg=k2qYc&pd_rd_r=cc1ed61f-3cf8-4e98-bb0c-e13c62b9bad7&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-300 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>


      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/gloves green.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">ARSH SPORTS<br/>Color:Green</h1>
        <p className="text-black">Soccer Goalie Gloves,Football Goalkeeper Gloves for Kids Boys Youth Children Double Wrist Protection Along 4mm Super Grip Palm</p>
        <a href="https://www.amazon.com/dp/B0CRDJLHZ6/ref=sspa_dk_detail_2?pd_rd_i=B0CRDJLHZ6&pd_rd_w=GVi2w&content-id=amzn1.sym.30062d3d-2c31-47f3-af26-55177a669bb5&pf_rd_p=30062d3d-2c31-47f3-af26-55177a669bb5&pf_rd_r=0Y8164CYJKKTAJCYET00&pd_rd_wg=k2qYc&pd_rd_r=cc1ed61f-3cf8-4e98-bb0c-e13c62b9bad7&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-300 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>
</div>

<div className="text-amber-50 text-center text-5xl p-7 font-serif font-bold">Shirt football</div>
  {/* shirt gaolkeeper */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-15">  

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/shirt black.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">LAIFU<br/>Color:Black</h1>
        <p className="text-black">Soccer Goalie Gloves,Football Goalkeeper Gloves for Kids Boys Youth Children Double Wrist Protection Along 4mm Super Grip Palm</p>
        <a href="https://www.amazon.com/gp/aw/d/B0BBQZ72FQ/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=e04f69a3ee834476b340f7cbea857b5b&hsa_cr_id=0&qid=1770706819&sr=1-1-f02f01d6-adaf-4bef-9a7c-29308eff9043&ref_=sbx__sbtcd2_asin_0_img&pd_rd_w=wxv6T&content-id=amzn1.sym.e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a%3Aamzn1.sym.e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a&pf_rd_p=e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a&pf_rd_r=QD0G2BQ613Q2JGR0ECJH&pd_rd_wg=UZzYf&pd_rd_r=dc583ad7-e093-409c-8c79-0dbafa79db35&th=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-300 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/shirt yellow.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">LAIFU<br/>Color:Black</h1>
        <p className="text-black">Soccer Goalie Gloves,Football Goalkeeper Gloves for Kids Boys Youth Children Double Wrist Protection Along 4mm Super Grip Palm</p>
        <a href="https://www.amazon.com/gp/aw/d/B09KBXZL67/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=e04f69a3ee834476b340f7cbea857b5b&hsa_cr_id=0&qid=1770706819&sr=1-1-f02f01d6-adaf-4bef-9a7c-29308eff9043&ref_=sbx__sbtcd2_asin_0_img&pd_rd_w=wxv6T&content-id=amzn1.sym.e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a%3Aamzn1.sym.e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a&pf_rd_p=e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a&pf_rd_r=QD0G2BQ613Q2JGR0ECJH&pd_rd_wg=UZzYf&pd_rd_r=dc583ad7-e093-409c-8c79-0dbafa79db35&th=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-300 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
        <img src="public/shirt orange2.jpg" className="w-60 h-50 object-contain mt-6" />
        <h1 className="mt-4 text-gray-900 font-semibold text-center text-2xl">LAIFU<br/>Color:Red</h1>
        <p className="text-black">Soccer Goalie Gloves,Football Goalkeeper Gloves for Kids Boys Youth Children Double Wrist Protection Along 4mm Super Grip Palm</p>
        <a href="https://www.amazon.com/gp/aw/d/B09KBMB442/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=e04f69a3ee834476b340f7cbea857b5b&hsa_cr_id=0&qid=1770706819&sr=1-1-f02f01d6-adaf-4bef-9a7c-29308eff9043&ref_=sbx__sbtcd2_asin_0_img&pd_rd_w=wxv6T&content-id=amzn1.sym.e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a%3Aamzn1.sym.e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a&pf_rd_p=e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a&pf_rd_r=QD0G2BQ613Q2JGR0ECJH&pd_rd_wg=UZzYf&pd_rd_r=dc583ad7-e093-409c-8c79-0dbafa79db35&th=1"target="_blank">
          <button className="bg-pink-700 hover:bg-pink-200 px-5 py-2 rounded-full mt-5">Buy Now</button>
        </a>
      </div>
</div>
<img src={shirt} className="w-full h-90 object-center rounded-lg" />
    
    </div>
  )
}

export default App