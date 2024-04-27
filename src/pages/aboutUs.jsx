export default function AboutUs() {
  return (
    <div className="flex flex-col bg-gray-100" id="aboutus">
      <div className="flex w-full text-3xl  font-extrabold leading-none justify-center items-center my-20">
        About Us
      </div>
      <div className="flex flex-row p-10  ">
        <div className="flex w-1/2 justify-center items-center">
            <div className="object-cover object-top items-center px-20 h-[600px] overflow-hidden">
            <img src="\src\assets\emil-widlund-xrbbXIXAWY0-unsplash.jpg" className="object-cover object-fit" />
            </div>
        </div>
        <div className="flex w-1/2 p-5">
          <section>
            <h3 className="flex text-4xl font-bold text-gray-600 justify-center mb-10">Our Story</h3>
            <p className="text-lg text-gray-500 m-5">
              Founded in 2024, Pustakhub was born out of a love for
              books and a commitment to sustainable reading. We saw an
              opportunity to create a platform where book enthusiasts could buy,
              sell, and exchange books, giving pre-loved books a chance to find
              new homes and readers.
            </p>

            <p className="text-lg text-gray-500 m-5">
              Our journey began in Chandigarh , India , where we
              realized the potential to build a community
              around the shared love of reading and recycling. With a passion
              for literature and a desire to make books more accessible and
              affordable, we set out to create a platform that would connect
              book lovers and promote eco-friendly reading habits.
            </p>

            <h3 className="flex text-4xl font-bold text-gray-600 justify-center mb-10"> Our Mission</h3>
            <p className="text-lg text-gray-500 m-5">
              At Pustakhub , our mission is to foster a community of
              book lovers who value sustainability, affordability, and the joy
              of discovering new stories. We believe that every book deserves a
              second chance and that by buying and selling second-hand books, we
              can reduce waste and contribute to a greener planet.
            </p>
          </section>
        </div>
      </div>

      <div className="flex flex-row p-10  bg-gray-100">
        <div className="flex w-1/2 p-5">
          <section>
            <h3 className="flex text-4xl font-bold text-gray-600 justify-center mb-10 " id="offerings">What We Offer</h3>
            <ul>
              <li className="text-gray-500 text-lg mt-5">
                <strong>Diverse Selection</strong>: Explore our wide range of
                second-hand books, from popular bestsellers to rare and
                collectible editions.
              </li>
              <li className="text-gray-500 text-lg mt-5">
                <strong>Easy Buying & Selling</strong>: Our user-friendly
                platform makes it easy to buy books, sell your pre-loved books,
                or swap with other members of our community.
              </li>
              <li className="text-gray-500 text-lg mt-5 mb-10">
                <strong>Secure Transactions</strong>: Shop with confidence
                knowing that all transactions are secure and protected.
              </li>
            </ul>

            <h3 className="flex text-4xl font-bold text-gray-600 justify-center mb-10">Join Our Community</h3>
            <p className="text-gray-500 text-lg mt-5 mb-10">
              Whether you're a book lover looking for your next read or someone
              who wants to give their books a new home, Pustakhub
              welcomes you to join our growing community. Together, we can make
              reading more sustainable and enjoyable for everyone!
            </p>
          </section>
        </div>
        <div className="flex w-1/2 justify-center items-center">
            <div className="object-cover object-top-center px-20">
            <img src="\src\assets\janko-ferlic-sfL_QOnmy00-unsplash.jpg"  />
            </div>
        </div>
      </div>
    </div>
  );
}
