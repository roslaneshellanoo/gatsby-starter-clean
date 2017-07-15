import React from "react";
// import Particles from 'react-particles-js';

const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
}

class Banner extends React.Component {
    render () {
        return (
            <div className="banner text-center">
                {/*<img src={mainBanner} alt=""/>*/}
                {/*<h1 className="white">Quizio.io</h1>*/}

                {/*<Particles style={style} params={{*/}
                    {/*particles: {*/}
                        {/*line_linked: {*/}
                            {/*shadow: {*/}
                                {/*enable: true,*/}
                                {/*color: "#3CA9D1",*/}
                                {/*blur: 5*/}
                            {/*},*/}
                
                        {/*},*/}
                        {/*number: {*/}
                            {/*value: 20,*/}
                            {/*density: {*/}
                                {/*enable: true,*/}
                                {/*value_area: 500*/}
                            {/*}*/}
                        {/*},*/}
                        {/*size: {*/}
                            {/*value: 5,*/}
                            {/*random: true,*/}
                            {/*anim: {*/}
                                {/*enable: false,*/}
                                {/*speed: 80,*/}
                                {/*size_min: 0.1,*/}
                                {/*sync: false*/}
                            {/*}*/}
                        {/*},*/}
                    {/*},*/}
                    {/*"interactivity": {*/}
                        {/*"detect_on": "canvas",*/}
                        {/*"events": {*/}
                            {/*"onhover": {*/}
                                {/*"enable": false,*/}
                                {/*"mode": "repulse"*/}
                            {/*},*/}
                            {/*"onclick": {*/}
                                {/*"enable": true,*/}
                                {/*"mode": "push"*/}
                            {/*},*/}
                            {/*"resize": true*/}
                        {/*},*/}
                        {/*"modes": {*/}
                            {/*"grab": {*/}
                                {/*"distance": 800,*/}
                                {/*"line_linked": {*/}
                                    {/*"opacity": 1*/}
                                {/*}*/}
                            {/*},*/}
                            {/*"bubble": {*/}
                                {/*"distance": 800,*/}
                                {/*"size": 80,*/}
                                {/*"duration": 2,*/}
                                {/*"opacity": 0.8,*/}
                                {/*"speed": 3*/}
                            {/*},*/}
                            {/*"repulse": {*/}
                                {/*"distance": 400,*/}
                                {/*"duration": 0.4*/}
                            {/*},*/}
                            {/*"push": {*/}
                                {/*"particles_nb": 4*/}
                            {/*},*/}
                            {/*"remove": {*/}
                                {/*"particles_nb": 2*/}
                            {/*}*/}
                        {/*}*/}
                    {/*},*/}
                {/*}}/>*/}
                <h2 className="white">Test your skills and <br/>  improve your knowledge!
                </h2>
            </div>
        )
    }
}

export default Banner