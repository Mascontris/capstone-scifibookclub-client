import React from 'react'
import { format as formatDate } from 'date-fns'
import './Utils.css'

export function NiceDate({ date, format='Do MMMM YYYY' }) {
  return formatDate(date, format)
}

export function Hyph() {
  return <span className='Hyph'>{' - '}</span>
}

export function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />
}

export function Textarea({ className, ...props }) {
  return (
    <textarea className={['Textarea', className].join(' ')} {...props} />
  )
}

export function Input({ className, ...props }) {
  return (
    <input className={['Input', className].join(' ')} {...props} />
  )
}

export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  )
}

export function Section({ className, list, ...props }) {
  const classes = [
    'Section',
    list && 'Section--list',
    className,
  ].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props} />
  )
}

function myFunction(x) {
  x.classList.toggle("change");
}

export function Hamburger({ className, ...props }) {
  return (
    <div className={['hamburger__container', className].join(' ')} {...props}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  )
}
