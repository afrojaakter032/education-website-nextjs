import { FaBriefcase } from "react-icons/fa";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { SiVorondesign } from "react-icons/si";

const Categories = () => {
    return (
        <section className="mt-5 mb-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                        <p className="pt-2">COURSE CATEGORIES</p>
                        <h3 className="font-blod mb-4">Popular Topics To Learn</h3>
                    </div>

                        <div className="col-lg-4 d-flex justify-content-center align-items-center gap-4">
                            <div className="fs-3"><FaBriefcase /></div>
                            <div>
                                <div className="fs-4 fw-bold">Personal Development</div>
                                <span>39 course</span>
                            </div>

                        </div>
                        <div className="col-lg-4 d-flex justify-content-center align-items-center gap-4">
                            <div className="fs-3"><PiFinnTheHumanFill /></div>
                            <div>
                                <div className="fs-4 fw-bold">Human Resource</div>
                                <span>39 course</span>
                            </div>

                        </div>
                        <div className="col-lg-4 d-flex justify-content-center align-items-center gap-4">
                            <div className="fs-3"><SiVorondesign /></div>
                            <div>
                                <div className="fs-4 fw-bold">Design & Art</div>
                                <span>39 course</span>
                            </div>

                        </div>
                       

                </div>
                <div className="row mb-5">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center gap-4">
                        <div className="fs-3"><FaBriefcase /></div>
                        <div>
                            <div className="fs-4 fw-bold">Business Management</div>
                            <span>39 course</span>
                        </div>

                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center gap-4">
                        <div className="fs-3"><PiFinnTheHumanFill /></div>
                        <div>
                            <div className="fs-4 fw-bold">Web Development</div>
                            <span>39 course</span>
                        </div>

                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center gap-4">
                        <div className="fs-3"><SiVorondesign /></div>
                        <div>
                            <div className="fs-4 fw-bold">LifeStyle</div>
                            <span>39 course</span>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center gap-4">
                        <div className="fs-3"><FaBriefcase /></div>
                        <div>
                            <div className="fs-4 fw-bold">Digital Marketing</div>
                            <span>39 course</span>
                        </div>

                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center gap-4">
                        <div className="fs-3"><PiFinnTheHumanFill /></div>
                        <div>
                            <div className="fs-4 fw-bold">Data Science</div>
                            <span>39 course</span>
                        </div>

                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center gap-4">
                        <div className="fs-3"><SiVorondesign /></div>
                        <div>
                            <div className="fs-4 fw-bold">Health & Fitness</div>
                            <span>39 course</span>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    );
};

export default Categories ;