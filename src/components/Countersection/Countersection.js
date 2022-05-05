import React from 'react';
import CountUp from 'react-countup';
import warehouse from '../../Assets/Image/warehouse.jpg'


const Countersection = () => {
    return (
        <div class="container my-24 px-6 mx-auto">
            <section class="mb-32 text-gray-800 text-center lg:text-left">
                <div class="container mx-auto xl:px-32 text-center lg:text-left">
                    <div class="grid lg:grid-cols-2 items-center">
                        <div class="mb-12 lg:mb-0">
                            <div
                                class="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)', zIndex: '1' }}
                            >
                                <h2 class="text-3xl font-bold mb-4 display-5">About us</h2>
                                <p class="text-gray-500 mb-12">
                                    We are a worldwide laptop dealer. We have more than
                                </p>

                                <div class="grid md:grid-cols-3 gap-x-6">
                                    <div class="mb-12 md:mb-0">
                                        <h2 class="text-3xl font-bold text-dark mb-4"><CountUp end={100} />+</h2>
                                        <h5 class="text-lg font-medium text-gray-500 mb-0">Products</h5>
                                    </div>

                                    <div class="mb-12 md:mb-0">
                                        <h2 class="text-3xl font-bold text-dark mb-4"><CountUp end={100} />+</h2>
                                        <h5 class="text-lg font-medium text-gray-500 mb-0">Reviews</h5>
                                    </div>

                                    <div class="">
                                        <h2 class="text-3xl font-bold text-dark mb-4"><CountUp end={100} />+</h2>
                                        <h5 class="text-lg font-medium text-gray-500 mb-0">Clients</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src={warehouse}
                                class="w-full md:w-80 shadow-lg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Countersection;