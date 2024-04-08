import React, { useEffect, useState } from 'react'
import { API_METHODS } from '../../../utils/configs'
import './ImagesTransition.styles.css'
import useFetch from '../../../utils/useFetch'

import { motion, AnimatePresence } from "framer-motion"

const ImagesTransition = () => {

    const [data, loading, error, fetch] = useFetch()
    const [imageIndex, setImageIndex] = useState(0)

    const [images, setImages] = useState([])


    const formatImageUrl = (url) => {
        // extract de id from the url
        const id = url.split("/")[5]
        const newUrl = `https://lh3.googleusercontent.com/d/${id}`
        return newUrl
    }

    const formatImages = (images) => {
        const newImages = images.map((image) => {
            return formatImageUrl(image)
        })
        return newImages
    }

    useEffect(() => {
        fetch(API_METHODS.configs.getConfigs)
    }, [])

    useEffect(() => {
        const response = data && data[0].data
        if (!data) return
        // setImages(response?.images.form)
        setImages(formatImages(response?.images?.form))
        console.log(images)
    }, [data])

    const transitionImages = () => {
        if (images.length === 0) return
        return (
            <div className="imageBx">
                <motion.img src={images[imageIndex]} alt="form"
                    className='image'
                    key={imageIndex}
                    initial={{ opacity: 0, x: 600 }}
                    animate={{ opacity: 1, x: -150 }}
                    exit={{ opacity: 1, x: 500 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>
        )
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prev) => {
                if (prev === images.length - 1) {
                    return 0
                }
                return prev + 1
            })
        }, 2000)
        return () => clearInterval(interval)
    }, [images])



    return (
        <div className="imagesContainer">

            {
                transitionImages()
            }
        </div>


    )
}

export default ImagesTransition