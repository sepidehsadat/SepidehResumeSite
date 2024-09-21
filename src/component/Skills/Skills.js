import React, { Component } from 'react'
import Title from '../../component/Title/Title'
import SkillsItem from '../../component/Skills/SkillsItem'
import HTML from '../../assets/images/html.png'
import CSS from '../../assets/images/css.png'
import SASS from '../../assets/images/sass.png'
import Js from '../../assets/images/js.png'
import Bootstrap from '../../assets/images/bootstrap.webp'
import ReactJs from '../../assets/images/react.png'
import NextJs from '../../assets/images/nextjs.webp'
import API from '../../assets/images/api.png'
import Antd from '../../assets/images/antd.svg'
import Tailwind from '../../assets/images/tailwind.png'
import Figma from '../../assets/images/figma.webp'
import Git from '../../assets/images/git.png'
import Web3 from '../../assets/images/web3.png'

//css
import style from './Skills.module.css'

export default class Skills extends Component {
  render() {
    return (
      <div className={style.skills} id={this.props.id}>
        <Title title="Skills" style={{ color: '#000' }} />
        <div
          className="row "
          style={{
            width: '100%',
            margin: '0',
            display: 'flex',
            justifyContent: 'start',
            AlignItems: 'center',
            gap: '20px 30px',
          }}
        >
          <SkillsItem
            title={'HTML'}
            logo={HTML}
            progressBar={100}
            style={{ border: '3px solid #ff5722' }}
          />
          <SkillsItem
            title={'CSS'}
            logo={CSS}
            progressBar={100}
            style={{ border: '3px solid #214ce5' }}
          />
          <SkillsItem
            title={'CSS/SASS'}
            logo={SASS}
            progressBar={90}
            style={{ border: '3px solid #ce679a' }}
          />
          <SkillsItem
            title={'JS'}
            logo={Js}
            progressBar={70}
            style={{ border: '3px solid #3c790a' }}
          />
          <SkillsItem
            title={'Bootstrap'}
            logo={Bootstrap}
            progressBar={100}
            style={{ border: '3px solid #5b4282' }}
          />
          <SkillsItem
            title={'ReactJs'}
            logo={ReactJs}
            progressBar={80}
            style={{ border: '3px solid #61dbfb' }}
          />
          <SkillsItem
            title={'NextJs'}
            logo={NextJs}
            progressBar={70}
            style={{ border: '3px solid #393939' }}
          />
          <SkillsItem
            title={'RestAPI'}
            logo={API}
            progressBar={90}
            style={{ border: '3px solid #98ccfd' }}
          />
          <SkillsItem
            title={'AntDesign'}
            logo={Antd}
            progressBar={70}
            style={{ border: '3px solid #0d6fff' }}
          />
          <SkillsItem
            title={'Tailwind'}
            logo={Tailwind}
            progressBar={50}
            style={{ border: '3px solid #252a2f' }}
          />
          <SkillsItem
            title={'GIt'}
            logo={Git}
            progressBar={60}
            style={{ border: '3px solid #de4c36' }}
          />
          <SkillsItem
            title={'Web3'}
            logo={Web3}
            progressBar={50}
            style={{ border: '3px solid #000' }}
          />
          <SkillsItem
            title={'Figma'}
            logo={Figma}
            progressBar={40}
            style={{ border: '3px solid #000' }}
          />
        </div>
      </div>
    )
  }
}
