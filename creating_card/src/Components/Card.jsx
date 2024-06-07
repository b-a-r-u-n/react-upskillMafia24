import React from 'react';
import '../CSS/style.css';

const Card = () => {
    return(
        <section className="bg-black">
            <h1 className="text-5xl font-semibold text-center py-12 text-white">All the cards here</h1>

            <div className="card-container px-40 py-12 flex justify-between flex-wrap gap-y-40">
                <div className="card-border">
                    <div className="card h-96 w-80 bg-indigo-950 px-8 py-9 flex flex-col justify-between items-center text-white">
                        <div className="card-image">
                            <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height="150" width="150" />
                        </div>
                        <div className="card-name text-3xl text-center">
                            <h2>
                                Card
                            </h2>
                        </div>
                        <div className="card-desc">
                            <p>
                                Consequatur quisquam distinctio nulla adipisci? Cupiditate beatae exercitationem accusantium! Facere, expedita alias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;