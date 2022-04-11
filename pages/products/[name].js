import React, { useState } from 'react'
import styles from '../../styles/contact.module.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Circles from '../../components/Circle'
import { checkinUser, registerSpritual, registerContract } from '../../actions/checkinAction'

import { withRouter, NextRouter } from 'next/router'
import { data } from '../../data'
import { useRouter } from 'next/router'
const Product = (props) => {
    const router = useRouter()
    const [departure, setDeparture] = useState()
    const [destination, setDestination] = useState()
    const [timeTravel, setTimeTravel] = useState()
    const [fullname, setFullname] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [howlong, setHowlong] = useState()
    const [bus, setBus] = useState()
    const [seat, setSeat] = useState()

    let error;

    useState(() => {

    })

    const { registerSpritual } = props.availableBus
    if (router.query.name === 'Daily') {
        const checkin = (e) => {
            e.preventDefault()
            if (departure === destination) {
                if (props.availableBus?.availableBus?.error)
                    error = "Destination and Departure is the same page"
            } else {
                const data = {
                    departure: departure,
                    destination: destination,
                    travel_date: timeTravel,
                };
                props.checkinUser(data)
            }
        }
        return (
            <div className={styles.container}>
                {console.log(props.availableBus?.availableBus)}
                {/* <>
                    {props.availableBus.availableBus && props.availableBus.availableBus.error ?
                        <h4 className={styles.error}>{props.availableBus.availableBus}</h4> : null}
                    {props.availableBus.availableBus && props.availableBus.availableBus.success ?
                        <h4 className={styles.success}>{props.availableBus.availableBus.success}</h4> : null}
                </> */}
                <Circles backgroundColor="green" left="-40vh" top="-20vh" />
                <Circles backgroundColor="yellow" right="-30vh" bottom="-60vh" />
                <h1 className={styles.title}>Spritual Trip</h1>
                <form className={styles.form} onSubmit={checkin}>
                    <h4 className={styles.error}>{props.availableBus?.availableBus?.error}</h4>
                    <h4 className={styles.error}>{error}</h4>
                    <h4 className={styles.success}>{props.availableBus?.availableBus?.success}</h4>


                    {/* <input type="text" name='departure' className={styles.inputS} value={departure} onChange={e => setDeparture(e.target.value)} placeholder="Departure" /> */}
                    <select className={styles.inputS} onChange={e => setDeparture(e.target.value)} >
                        <option value='Addis abeba'>Addis Abeba</option>
                        <option value='Bahir dar'>Bahir dar</option>
                        <option value='Hawassa'>Hawassa</option>
                        <option value='Jima'>Jima</option>
                        <option value='Gondar'>Gondar</option>
                    </select>
                    <select className={styles.inputS} onChange={e => setDestination(e.target.value)} >
                        <option value='Addis abeba'>Addis Abeba</option>
                        <option value='Bahir dar'>Bahir dar</option>
                        <option value='Hawassa'>Hawassa</option>
                        <option value='Jima'>Jima</option>
                        <option value='Gondar'>Gondar</option>
                    </select>
                    <input type="text" name='destination' className={styles.inputS} value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" />
                    <input type="date" className={styles.inputL} value={timeTravel} onChange={e => setTimeTravel(e.target.value)} placeholder=" Travel Date" />
                    <button type="submit" className={styles.buttonF}>SUBMIT</button>
                </form>
            </div>
        )
    } else if (router.query.name === 'Contract') {

        const registerContract = (e) => {
            console.log(e)
            e.preventDefault()

            const data = {
                fullname: fullname,
                email: email,
                howlong: howlong,
                phonenumber: phoneNumber,
                travel_date: timeTravel,
                bus: bus
            };

            props.registerContract(data)

        }



        return (
            <div className={styles.container}>
                <Circles backgroundColor="green" left="-40vh" top="-20vh" />
                <Circles backgroundColor="yellow" right="-30vh" bottom="-60vh" />
                <h1 className={styles.title}>Contract</h1>

                {props.availableBus.registerContract ? (<h4 className={styles.success}>Your are booked successfull {props.availableBus.registerContract.fullname} </h4>) : null}
                <form className={styles.form} onSubmit={registerContract}>
                    <h4 className={styles.error}>{props.availableBus?.availableBus?.error}</h4>
                    <h4 className={styles.error}>{error}</h4>
                    <h4 className={styles.success}>{props.availableBus?.availableBus?.success}</h4>
                    <input type="text" name='fullname' className={styles.inputS} value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Name" />
                    <input type="text" name='phonenumber' className={styles.inputS} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone number" />
                    <input type="text" name='email' className={styles.inputS} value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <input type="number" name='howlong' className={styles.inputS} value={howlong} onChange={e => setHowlong(e.target.value)} placeholder="How long " />
                    <select className={styles.inputS} onChange={e => setBus(e.target.value)} >
                        <option value='sheger bus'>Sheger bus</option>
                        <option value='Oda bus'>Oda bus</option>
                        <option value='fana bus'>Fana</option>
                        <option value='selam'>Selam</option>
                        <option value='golden'>Golden</option>
                    </select>


                    <input type="date" className={styles.inputL} value={timeTravel} onChange={e => setTimeTravel(e.target.value)} placeholder=" Travel Date" />
                    <button type="submit" className={styles.buttonF}>SUBMIT</button>
                </form>
            </div>
        )

    } else if (router.query.name === 'Spritual Trip') {

        const registerSpritual = (e) => {
            console.log(props.availableBus.registerSpritual)
            e.preventDefault()
            if (departure === destination) {
                if (props.availableBus?.availableBus?.error)
                    error = "Destination and Departure is the same page"
            } else {
                const data = {
                    departure: departure,
                    destination: destination,
                    fullname: fullname,
                    email: email,
                    phonenumber: phoneNumber,
                    travel_date: timeTravel,
                    seats: seat,
                    bus: bus

                };
                props.registerSpritual(data)
            }
        }



        return (
            <div className={styles.container}>
                <Circles backgroundColor="green" left="-40vh" top="-20vh" />
                <Circles backgroundColor="yellow" right="-30vh" bottom="-60vh" />
                <h1 className={styles.title}>Spritual Trip</h1>

                {props.availableBus.registerSpritual ? (<h4 className={styles.success}>Your are booked successfull {props.availableBus.registerSpritual.fullname} we will call you verify Thank you</h4>) : null}
                <form className={styles.form} onSubmit={registerSpritual}>
                    <h4 className={styles.error}>{props.availableBus?.availableBus?.error}</h4>
                    <h4 className={styles.error}>{error}</h4>
                    <h4 className={styles.success}>{props.availableBus?.availableBus?.success}</h4>




                    {/* <input type="text" name='departure' className={styles.inputS} value={departure} onChange={e => setDeparture(e.target.value)} placeholder="Departure" /> */}
                    <input type="text" name='departure' className={styles.inputS} value={departure} onChange={e => setDeparture(e.target.value)} placeholder="Departuer" />
                    <input type="text" name='fullname' className={styles.inputS} value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Name" />
                    <input type="text" name='destination' className={styles.inputS} value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" />
                    <input type="text" name='phonenumber' className={styles.inputS} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone number" />
                    <input type="text" name='email' className={styles.inputS} value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <input type="number" name='seat' className={styles.inputS} value={seat} onChange={e => setSeat(e.target.value)} placeholder="Number of seats you want to reserve" />
                    <select className={styles.inputS} onChange={e => setBus(e.target.value)} >
                        <option value='sheger bus'>Sheger bus</option>
                        <option value='Oda bus'>Oda bus</option>
                        <option value='fana bus'>Fana</option>
                        <option value='selam'>Selam</option>
                        <option value='golden'>Golden</option>
                    </select>


                    <input type="date" className={styles.inputL} value={timeTravel} onChange={e => setTimeTravel(e.target.value)} placeholder=" Travel Date" />
                    <button type="submit" className={styles.buttonF}>SUBMIT</button>
                </form>
            </div>
        )
    } else if (router.query.name === 'Other') {
        return (
            <div className={styles.container}>
                <Circles backgroundColor="green" left="-40vh" top="-20vh" />
                <Circles backgroundColor="yellow" right="-30vh" bottom="-60vh" />
                <h1 className={styles.title}>Other</h1>
                <form className={styles.form}>
                    <input className={styles.inputS} placeholder="username" />
                    <input className={styles.inputS} placeholder="phone number" />
                    <input className={styles.inputL} placeholder="Email" />
                    <input className={styles.inputL} placeholder="Subject" />
                    <text className={styles.textarea} placeholder="Message" row={6} />
                    <button className={styles.buttonF}>SUBMIT</button>
                </form>
            </div>
        )
    }

}
Product.propTypes = {
    checkinUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    availableBus: state.checkin

})


export default connect(mapStateToProps, { checkinUser, registerSpritual, registerContract })(withRouter(Product))