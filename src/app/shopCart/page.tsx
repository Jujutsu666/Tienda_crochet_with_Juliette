import Image from "next/image";
import shop from "public/images/shop.png";
import card from "public/images/card.png";
import check1 from "public/images/check1.png";
import check2 from "public/images/check2.png";
import paypal from "public/images/paypal.png";
import Cow1 from "public/images/sale/cow1.jpg";
import remove from "public/images/remove.png";
import add2 from "public/images/add2.png";
import close from "public/images/close.png";
import Cow2 from "public/images/sale/cow2.jpg";
import "./style.css";
export default function Shopcart() {
  return (
    <main className="max-w-01440px min-h-[100vh] m-auto mt-[40px] mb-[40px] flex flex-col">
      <h1>
        <Image className="w-[40px] " src={shop} alt="Shopping Cart image" />
        Shopping Cart
      </h1>
      {/* item flex */}
      <div className="flex flex-grow">
        {/* checkout section*/}
        <section id="checkout">
          {/*  section heading*/}
          <h2>Payment Details</h2>
          {/*  payment form*/}
          <div className="mb-[40px]">
            <div className="flex items-center gap-[30px] mb-[40px]">
              {/*   method1 */}
              <button className="w-[50%] flex items-center gap-5 cursor-pointer px-[30px] py-[15px] border-[var(--quick-silver)] rounded-[var(--radius)] border-[1px] border-solid hover:bg-blue-500 hover:text-white">
                <Image
                  className="w-[20px] "
                  src={card}
                  alt="payment card image"
                />
                <span>Credit Card</span>
                <Image
                  className="w-[20px] ml-auto "
                  src={check1}
                  alt="payment card image"
                />
              </button>
              {/*   method2 */}
              <button className="w-[50%] flex items-center gap-5 cursor-pointer px-[30px] py-[15px] border-[var(--quick-silver)] rounded-[var(--radius)] border-[1px] border-solid hover:bg-blue-500 hover:text-white">
                <Image
                  className="w-[20px] filter hover:invert hover:opacity-100 "
                  src={paypal}
                  alt="payment card image"
                />
                <span>PayPal</span>
                <Image
                  className="  w-[22px] ml-auto filter hover:invert hover:opacity-100 "
                  src={check2}
                  alt="payment card image"
                />
              </button>
            </div>

            <form action="#">
              {/*   cardholder name */}
              <div className="mb-[20px]">
                {/*   label default */}
                <label htmlFor="cardholder-name" className="">
                  Cardholder name
                </label>
                {/*   input default + id card holder name*/}
                <input
                  type="text"
                  name="cardholder-name"
                  className=" px-[15px] py-2.5 text-[18px] font-medium"
                />
              </div>

              {/*   card number */}
              <div className="mb-[20px] ">
                {/*   label default */}
                <label htmlFor="card-number" className="">
                  Card number
                </label>
                {/*   input default + id card number*/}
                <input
                  type="number"
                  name="card-number"
                  className="px-[15px] py-2.5 text-[18px] font-medium tracking-[3px]  "
                />
              </div>

              {/*   input flex */}
              <div className="flex items-center gap-[30px]">
                {/*  expire data */}
                <div className="w-[50%]">
                  <label htmlFor="expire-data" className="">
                    Expiration date
                  </label>
                  {/*  expire data + id expire-date*/}
                  <div className=" flex items-center gap-[13px] ">
                    <input
                      type="number"
                      placeholder="31"
                      min={1}
                      max={31}
                      name="day"
                      className=" px-[15px] py-2.5 text-[18px] font-medium tracking-[3px] text-center bg-gray-300 "
                    />
                    /
                    <input
                      type="number"
                      placeholder="12"
                      min={1}
                      max={12}
                      name="month"
                      className="px-[15px] py-2.5 text-[18px] font-medium tracking-[3px] text-center bg-gray-300 "
                    />
                  </div>
                </div>

                {/*   cvv */}
                <div className="w-[50%]">
                  {/*   label default */}
                  <label htmlFor="cvv" className="">
                    CVV
                  </label>
                  {/*   input default + id cvv*/}
                  <input
                    type="number"
                    name="cvv"
                    className=" bg-gray-300 px-[15px] py-2.5 text-[18px] font-medium tracking-[3px]"
                  />
                </div>
              </div>
            </form>
          </div>

          {/*  btn btn primary - span id payamount outlinenotworking*/}
          <button className="bg-blue-500 px-[45px] py-[13px] font-medium text-white rounded-[var(--radius)] active:scale-99 focus:text-white focus:outline-offset-2 focus-custom-outline  ">
            <b className="mr-[10px]">Pay</b> $ <span className="">100</span>
          </button>
        </section>

        {/* cart  section */}
        <section className="cart">
          <div className="cart-item-box">
            <h2 className="">Order summery</h2>

            <div className="product-card">
              <div className="card">
                <div className="img-box">
                  <Image
                    className="w-[80px] product-image"
                    src={Cow1}
                    alt="item"
                  />
                </div>

                <div className="detail">
                  <h4 className="product-name">Black and White Cow</h4>

                  <div className="wrapper">
                    <div className="product-qty">
                      {/* id decrement */}
                      <button className="">
                        <Image
                          className="w-[20px] "
                          src={remove}
                          alt="remove"
                        />
                      </button>
                      {/* id quantity */}
                      <span className="">1</span>
                      {/* id increment */}
                      <button className="">
                        <Image className="w-[20px] " src={add2} alt="remove" />
                      </button>
                    </div>
                    {/* price+ id span price*/}
                    <div className="">
                      $ <span className="">50</span>
                    </div>
                  </div>
                </div>
                {/*id product close btn*/}
                <button className=" product-close-btn">
                  <Image src={close} alt="close" />
                </button>
              </div>
            </div>

            {/* copy of product-card for card 2*/}
            <div className="product-card">
              <div className="card">
                <div className="img-box">
                  <Image
                    className="w-[80px] product-image"
                    src={Cow2}
                    alt="item"
                  />
                </div>

                <div className="detail">
                  <h4 className="product-name">Brown Cow</h4>

                  <div className="wrapper">
                    <div className="product-qty">
                      {/* id decrement */}
                      <button className="">
                        <Image
                          className="w-[20px] "
                          src={remove}
                          alt="remove"
                        />
                      </button>
                      {/* id quantity */}
                      <span className="">1</span>
                      {/* id increment */}
                      <button className="">
                        <Image className="w-[20px] " src={add2} alt="remove" />
                      </button>
                    </div>
                    {/* price+ id span price*/}
                    <div className="">
                      $ <span className="">50</span>
                    </div>
                  </div>
                </div>

                <button className="product-close-btn">
                  <Image className=" " src={close} alt="close" />
                </button>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="discount-token">
              {/* label default*/}
              <label htmlFor="discount-token" className="">
                Gift card/Discount code
              </label>

              <div className="wrapper-flex">
                {/* input default + id discount-token*/}
                <input type="text" name="input-token" className="" />

                <button className="btn btn-outline">Apply</button>
              </div>
            </div>

            <div className="amount">
              {/* subtotal */}
              <div className="text-[color:var(--gris-espagnol)]">
                <span>Subtotal</span>
                <span>
                  ${/* id subtotal */}
                  <span>100</span>
                </span>
              </div>

              {/* tax */}
              <div className="text-[color:var(--gris-espagnol)]">
                <span>Tax</span>
                <span>
                  ${/* id tax */}
                  <span>0.00</span>
                </span>
              </div>

              {/* shipping */}
              <div className="text-[color:var(--gris-espagnol)]">
                <span>Shipping</span>
                <span>
                  ${/* id shipping */}
                  <span>0.00</span>
                </span>
              </div>

              <div className="total">
                <span>Total</span>
                <span>
                  $<span className="total">100</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
