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
              <div className="">
                {/*   label default */}
                <label
                  htmlFor="cardholder-name"
                  className="pl-[10px] mb-[5px] text-[length:var(--fs-14)]  text-[color:var(--gris-espagnol)]"
                >
                  Cardholder name
                </label>
                {/*   input default + id card holder name*/}
                <input
                  type="text"
                  name="cardholder-name"
                  className="rounded-[var(--radius)] text-[color:var(--davys-gris)] background-[color:var(----platine)] "
                />
              </div>

              {/*   card number */}
              <div className="">
                {/*   label default */}
                <label
                  htmlFor="card-number"
                  className="pl-[10px] mb-[5px] text-[length:var(--fs-14)]  text-[color:var(--gris-espagnol)]"
                >
                  Card number
                </label>
                {/*   input default + id card number*/}
                <input type="number" name="card-number" className="" />
              </div>

              {/*   input flex */}
              <div className="">
                {/*  expire data */}
                <div className="">
                  <label
                    htmlFor="expire-data"
                    className="pl-[10px] mb-[5px] text-[length:var(--fs-14)]  text-[color:var(--gris-espagnol)]"
                  >
                    Expiration date
                  </label>
                  {/*  expire data + id expire-date*/}
                  <div className="">
                    <input
                      type="number"
                      placeholder="31"
                      min={1}
                      max={31}
                      name="day"
                      className="inherit w-[100%] border"
                    />
                    /
                    <input
                      type="number"
                      placeholder="12"
                      min={1}
                      max={12}
                      name="month"
                      className="inherit w-[100%] border"
                    />
                  </div>
                </div>

                {/*   cvv */}
                <div className="">
                  {/*   label default */}
                  <label
                    htmlFor="cvv"
                    className="pl-[10px] mb-[5px] text-[length:var(--fs-14)]  text-[color:var(--gris-espagnol)]"
                  >
                    CVV
                  </label>
                  {/*   input default + id cvv*/}
                  <input
                    type="number"
                    name="cvv"
                    className="rounded-[var(--radius)] text-[color:var(--davys-gris)];
  background: var(--platine)"
                  />
                </div>
              </div>
            </form>
          </div>
          {/*  btn btn primary - span id payamount*/}
          <button className="">
            <b>Pay</b> $ <span className="">100</span>
          </button>
        </section>

        {/* cart  section class cart*/}
        <section className="">
          {/* cart-item-box*/}
          <div className="">
            {/* section heading*/}
            <h2 className="">Order summery</h2>
            {/* product-card*/}
            <div className="">
              {/* card*/}
              <div className="">
                {/* img-box*/}
                <div className="">
                  <Image className="w-[80px] " src={Cow1} alt="item" />
                </div>

                {/* detail*/}
                <div className="">
                  {/* product-name */}
                  <h4 className="">Cow Black and White</h4>
                  {/* WRAPPER*/}
                  <div className="">
                    {/* product-qty */}
                    <div className="">
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
                      $ <span className="">1.25</span>
                    </div>
                  </div>
                </div>
                {/*id product close btn*/}
                <button className="">
                  <Image className="w-[20px] " src={close} alt="close" />
                </button>
              </div>
            </div>
            {/* copy of product card for card 2*/}
            <div className="">
              {/* card*/}
              <div className="">
                {/* img-box*/}
                <div className="">
                  <Image className="w-[80px] " src={Cow2} alt="item" />
                </div>

                {/* detail*/}
                <div className="">
                  {/* product-name */}
                  <h4 className="">Brown Cow</h4>
                  {/* WRAPPER*/}
                  <div className="">
                    {/* product-qty */}
                    <div className="">
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
                <button className="">
                  <Image className="w-[20px] " src={close} alt="close" />
                </button>
              </div>
            </div>
          </div>

          {/* wrapper*/}
          <div className="">
            {/* discount token*/}
            <div className="">
              {/* label default*/}
              <label
                htmlFor="discount-token"
                className="pl-[10px] mb-[5px] text-[length:var(--fs-14)]  text-[color:var(--gris-espagnol)]"
              >
                Gift card/Discount code
              </label>
              {/* wrapper flex*/}
              <div className="">
                {/* input default + id discount-token*/}
                <input type="text" name="input-token" className="" />
                {/* btn btn outline*/}
                <button className="">Apply</button>
              </div>
            </div>

            {/* amount */}
            <div className="">
              {/* subtotal */}
              <div className="">
                <span>Subtotal</span>
                <span>
                  ${/* id subtotal */}
                  <span>100</span>
                </span>
              </div>

              {/* tax */}
              <div className="">
                <span>Tax</span>
                <span>
                  ${/* id tax */}
                  <span>?</span>
                </span>
              </div>

              {/* shipping */}
              <div className="">
                <span>Shipping</span>
                <span>
                  ${/* id shipping */}
                  <span>0.00</span>
                </span>
              </div>

              {/* total */}
              <div className="">
                <span>Total</span>
                <span>
                  ${/* id total */}
                  <span>100</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
