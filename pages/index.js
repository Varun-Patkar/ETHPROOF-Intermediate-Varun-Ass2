import React, { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import axios from "axios";
import { toast, ToastContainer } from "react-nextjs-toast";

import Navbar from "@/components/Navbar/Navbar.jsx";

import {
	programmingAddress,
	programmingAddressABI,
} from "@/context/constants.js";

const fetchContract = (signerOrProvider) =>
	new ethers.Contract(
		programmingAddress,
		programmingAddressABI,
		signerOrProvider
	);

const Home = () => {
	const [answer, setAnswer] = useState("No Answer to display yet");
	const [choice, setChoice] = useState(-1);
	// useEffect(() => {
	// 	toast.notify("String", { duration: 5, type: "success" });
	// }, []);

	return (
		<div>
			<Navbar />
			<ToastContainer />
			<div class="container">
				<div class="row">
					<div class="col-lg-10 col-xl-9 mx-auto">
						<div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
							<div class="card-body p-4 p-sm-5">
								<h1 class="text-center mb-3">{answer}</h1>
								<div class="d-grid mb-2">
									<button
										class="btn btn-lg btn-primary btn-login fw-bold text-uppercase mb-5"
										type="submit"
										onClick={async () => {
											const web3Modal = new Web3Modal();
											const connection = await web3Modal.connect();
											const provider = new ethers.providers.Web3Provider(
												connection
											);
											const signer = provider.getSigner();
											const contract = fetchContract(signer);
											var result = await contract.getAns();
											switch (choice) {
												case -1:
													setAnswer("No Answer to display yet");
												case 0:
													setAnswer(
														"It is " +
															(result
																? "a Palindrome Number"
																: "Not a Palindrome Number")
													);
													toast.notify(
														"It is " +
															(result
																? "a Palindrome Number"
																: "Not a Palindrome Number"),
														{ duration: 5, type: result ? "success" : "error" }
													);
													break;
												case 1:
													setAnswer(
														"It is " +
															(result
																? "a Armstrong Number"
																: "Not a Armstrong Number")
													);
													toast.notify(
														"It is " +
															(result
																? "a Armstrong Number"
																: "Not a Armstrong Number"),
														{
															duration: 5,
															type: result ? "success" : "error",
														}
													);
													break;
												case 2:
													setAnswer(
														"It is " +
															(result
																? "a Perfect Number"
																: "Not a Perfect Number")
													);
													toast.notify(
														"It is " +
															(result
																? "a Perfect Number"
																: "Not a Perfect Number"),
														{ duration: 5, type: result ? "success" : "error" }
													);
													break;
											}
										}}
									>
										Update Answer
									</button>
								</div>
								<h5 class="card-title text-center mb-5 fs-5">
									Palindrome No. Check
								</h5>
								<div class="form-floating mb-3">
									<input
										type="text"
										class="form-control"
										name="palindrome"
										id="palindrome"
										placeholder="Palindrome"
										required
										autofocus
									/>
									<label for="palindrome">Palindrome No. or Not</label>
								</div>

								<div class="d-grid mb-2">
									<button
										class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
										type="submit"
										onClick={async () => {
											setChoice(0);
											var n = parseInt(
												document.getElementById("palindrome").value
											);
											if (n) {
												const web3Modal = new Web3Modal();
												const connection = await web3Modal.connect();
												const provider = new ethers.providers.Web3Provider(
													connection
												);
												const signer = provider.getSigner();
												const contract = fetchContract(signer);
												var result = await contract.palindrome(n);
												result.wait();
											} else {
												toast.notify("Please Enter Value", {
													duration: 5,
													type: "error",
												});
											}
										}}
									>
										Check Palindrome
									</button>
								</div>

								<h5 class="card-title text-center my-5 fs-5">
									Armstrong No. Check
								</h5>
								<div class="form-floating mb-3">
									<input
										type="text"
										class="form-control"
										name="armstrong"
										id="armstrong"
										placeholder="Armstrong"
										required
										autofocus
									/>
									<label for="armstrong">Armstrong No. or Not</label>
								</div>

								<div class="d-grid mb-2">
									<button
										class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
										type="submit"
										onClick={async () => {
											setChoice(1);
											var n = parseInt(
												document.getElementById("armstrong").value
											);
											if (n) {
												const web3Modal = new Web3Modal();
												const connection = await web3Modal.connect();
												const provider = new ethers.providers.Web3Provider(
													connection
												);
												const signer = provider.getSigner();
												const contract = fetchContract(signer);
												var result = await contract.palindrome(n);
												result.wait();
											} else {
												toast.notify("Please Enter Value", {
													duration: 5,
													type: "error",
												});
											}
										}}
									>
										Check Armstrong No.
									</button>
								</div>

								<h5 class="card-title text-center my-5 fs-5">
									Perfect No. Check
								</h5>
								<div class="form-floating mb-3">
									<input
										type="text"
										class="form-control"
										name="perfect"
										id="perfect"
										placeholder="Perfect"
										required
										autofocus
									/>
									<label for="perfect">Perfect No. or Not</label>
								</div>

								<div class="d-grid mb-2">
									<button
										class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
										type="submit"
										onClick={async () => {
											setChoice(1);
											var n = parseInt(
												document.getElementById("perfect").value
											);
											if (n) {
												const web3Modal = new Web3Modal();
												const connection = await web3Modal.connect();
												const provider = new ethers.providers.Web3Provider(
													connection
												);
												const signer = provider.getSigner();
												const contract = fetchContract(signer);
												var result = await contract.palindrome(n);
												result.wait();
											} else {
												toast.notify("Please Enter Value", {
													duration: 5,
													type: "error",
												});
											}
										}}
									>
										Check Perfect No.
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
