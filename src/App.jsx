import React from 'react'
import flag from "./assets/flag.svg"
import flag2 from "./assets/flag2.svg"
import nishon from "./assets/nishon.svg"
import natianalGinm from "./assets/nationalGimn.svg"
import tel from "./assets/call.svg"
import mail from "./assets/mail.svg"
import kabinet from "./assets/kabinet.svg"
import firstSection from "./assets/FfirstSection.svg"
import twoPerson from "./assets/twoPerson.svg"
import cardIcon from "./assets/cardIcon.svg"
import sattor from "./assets/sattor.svg"
import person1 from "./assets/person1.svg"
import person2 from "./assets/person2.svg"
import person3 from "./assets/person3.svg"
import person4 from "./assets/person4.svg"
import icon1 from "./assets/icon1.svg"
import icon2 from "./assets/icon2.svg"
import icon3 from "./assets/icon3.svg"
import icon4 from "./assets/icon4.svg"
import mufid from "./assets/mufid.svg"
import diagrama from "./assets/diagrama.svg"
import vopros from "./assets/vopros.svg"
import map from "./assets/map.svg"
import locationn from "./assets/location.svg"
import email from "./assets/email.svg"
import phone from "./assets/phone.svg"
import slider1 from "./assets/slider1.svg"
import slider2 from "./assets/slider2.svg"
import slider3 from "./assets/slider3.svg"
import slider4 from "./assets/slider4.svg"
// CSS
import "./App.css"

// Acordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Marquee
import Marquee from 'react-fast-marquee'
const App = () => {
  return (
    <div>
      <div className='flex justify-between m-[auto] pt-[20px] w-[80%] items-center'>
        <div className='lg:flex gap-[20px] items-center sm:hidden '>
          <div className='flex gap-[10px]'>
            <img src={flag} alt="" />
            <p>Парчам</p>
          </div>

          <div className='flex gap-[10px]'>
            <img src={nishon} alt="" />
            <p>Нишон</p>
          </div>

          <div className='flex gap-[10px]'>
            <img src={natianalGinm} alt="" />
            <p>Суруди милли</p>
          </div>
        </div>

      <div className='text-center text-[#18315C] font-[900] text-[20px] sm:m-[auto] lg:m-[0]'>
        <p>Вазорати Молияи</p>
        <p> Чумхурии Точикистон</p>
      </div>

      <div className='lg:flex gap-[20px] sm:hidden'>
        <div>
        <div className='flex gap-[20px]'>
          <img src={tel} alt="" />
          <p>221-51-59</p>
        </div>
        <div className='flex gap-[20px] mt-[5px]'>
          <img src={mail} alt="" />
          <p>info@dfo.tj</p>
        </div>

        </div>
        <div className='flex items-center gap-[10px]'>
          <img src={flag} alt="" />
          <select >
            <option value="">TJ</option>
            <option value="">Ru</option>
            <option value="">En</option>
          </select>
        </div>

        <div className='flex items-center gap-[10px]'>
          <img src={kabinet} alt="" />
          <p>Утоки шахси</p>
        </div>
      </div>
      </div>
    
    <div className='bg-[#18315C] mt-[20px]'>
      <div className='w-[65%] justify-center m-[auto] flex gap-[20px] text-[white] pt-[10px] pb-[10px] flex-wrap sm:text-center'>
        <p>Acоси</p>
        <select className='border-none bg-[#18315C]'>
          <option >Дар бораи Корхона</option>
        </select>
        <p>Конунгузори</p>
        <select className='border-none bg-[#18315C]'>
          <option >Маълумот</option>
        </select>

        <select className='border-none bg-[#18315C]'>
          <option >Ташкилотхо</option>
        </select>

        <select className='border-none bg-[#18315C]'>
          <option >Махфуздори</option>
        </select>
        <p>Эълонхо</p>

        <select className='border-none bg-[#18315C]'>
          <option >Кабулгох</option>
        </select>
      </div>
    </div>

    <div>
      <img className='foto' src={firstSection} alt="" />
    </div>


{/* Section 2 */}

    <div className='mt-[100px]'>
      <p className='lg:ml-[8%] text-[30px] font-[700] mb-[50px] sm:text-center lg:text-left'>Хабархои охирин</p>


    <div className='lg:flex gap-[40px] w-[85%] m-[auto] '>

      <div className='lg:w-[50%] flex gap-[20px] flex-wrap'>
        <div className='lg:w-[48%] bg-[#F7F8F9] rounded-[10px]'>
          <img className='w-[100%]' src={twoPerson} alt="" />
          <p className='w-[90%] m-[auto] pt-[10px] font-[700]'>Встреча главы Министерство финансов </p>
          <p className='w-[90%] mt-[10px] m-[auto] mb-[30px]'>The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
          <div className='flex w-[90%] justify-between pb-[10px]'>
            <a className='ml-[10px] underline'>Муфассал</a>
            <img src={cardIcon} alt="" />
          </div>
        </div>
        
        <div className='lg:w-[48%] bg-[#F7F8F9] rounded-[10px]'>
          <img className='w-[100%]' src={twoPerson} alt="" />
          <p className='w-[90%] m-[auto] pt-[10px] font-[700]'>Встреча главы Министерство финансов </p>
          <p className='w-[90%] mt-[10px] m-[auto] mb-[30px]'>The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
          <div className='flex w-[90%] justify-between pb-[10px]'>
            <a className='ml-[10px] underline'>Муфассал</a>
            <img src={cardIcon} alt="" />
          </div>
        </div>

        <div className='lg:w-[48%] bg-[#F7F8F9] rounded-[10px]'>
          <img className='w-[100%]' src={twoPerson} alt="" />
          <p className='w-[90%] m-[auto] pt-[10px] font-[700]'>Встреча главы Министерство финансов </p>
          <p className='w-[90%] mt-[10px] m-[auto] mb-[30px]'>The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
          <div className='flex w-[90%] justify-between pb-[10px]'>
            <a className='ml-[10px] underline'>Муфассал</a>
            <img src={cardIcon} alt="" />
          </div>
        </div>

        <div className='lg:w-[48%] bg-[#F7F8F9] rounded-[10px]'>
          <img className='w-[100%]' src={twoPerson} alt="" />
          <p className='w-[90%] m-[auto] pt-[10px] font-[700]'>Встреча главы Министерство финансов </p>
          <p className='w-[90%] mt-[10px] m-[auto] mb-[30px]'>The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
          <div className='flex w-[90%] justify-between pb-[10px]'>
            <a className='ml-[10px] underline'>Муфассал</a>
            <img src={cardIcon} alt="" />
          </div>
        </div>

        <div className='w-[100%]'>
          <button className='w-[100%] h-[50px] bg-[#18315C] rounded-[10px] text-[white] '>Хама хабархо</button>
        </div>
      </div>

      <div className='lg:w-[50%] bg-[#F7F8F9] rounded-[10px]'>

        <div className='flex gap-[20px] justify-center pt-[40px] sm:flex-col sm:text-center' >
          <button className='w-[220px] text-[white] h-[36px] rounded-[8px] bg-[#1F3967]'>Руководство Министерства</button>          
          <button className='w-[220px] h-[36px] rounded-[8px] bg-[white]'>Организационная структура</button>          
        </div>

        <div className='flex w-[90%] m-[auto] pt-[30px]'>
          <div className='lg:w-[50%]'>
            <img src={sattor} alt="" />
          </div>
          <div className='w-[50%] bg-[white] text-center'>
            <p className='text-[32px] w-[90%] font-[600]'>Каххорзода Файзиддин Саттор</p>
            <p className='w-[80%] m-[auto] mt-[30px]'>Министр Финансов Республики Таджикистан</p>
          </div>
        </div>

      <div className='flex w-[90%] m-[auto] pt-[30px] flex-wrap gap-[20px] pb-[30px]'>
          <div className='lg:w-[48%] bg-[white] sm:m-[auto] lg:m-[0]'>
            <img src={person1} className='w-[100%]' alt="" />
            <div className='text-center'>
              <p className='text-[14px] w-[80%] pt-[20px] font-[600] m-[auto]'>Карамзода  Джамшед Абдурахмон</p>
              <p className='pt-[20px] pb-[20px]'>Встреча главы Министерства Министерство    </p>
            </div>
          </div>

          <div className='lg:w-[48%] bg-[white] sm:m-[auto] lg:m-[0]'>
            <img src={person2} className='w-[100%]' alt="" />
            <div className='text-center'>
              <p className='text-[14px] w-[80%] pt-[20px] font-[600] m-[auto]'>Карамзода  Джамшед Абдурахмон</p>
              <p className='pt-[20px] pb-[20px]'>Встреча главы Министерства Министерство    </p>
            </div>
          </div>

          <div className='lg:w-[48%] bg-[white] sm:m-[auto] lg:m-[0]'>
            <img src={person3} className='w-[100%]' alt="" />
            <div className='text-center'>
              <p className='text-[14px] w-[80%] pt-[20px] font-[600] m-[auto]'>Карамзода  Джамшед Абдурахмон</p>
              <p className='pt-[20px] pb-[20px]'>Встреча главы Министерства Министерство    </p>
            </div>
          </div>

          <div className='lg:w-[48%] bg-[white] sm:m-[auto] lg:m-[0]'>
            <img src={person4} className='w-[100%]' alt="" />
            <div className='text-center'>
              <p className='text-[14px] w-[80%] pt-[20px] font-[600] m-[auto]'>Карамзода  Джамшед Абдурахмон</p>
              <p className='pt-[20px] pb-[20px]'>Встреча главы Министерства Министерство    </p>
            </div>
          </div>
      </div>  

      </div>
    </div>

    </div>

{/* Section 3 */}

    <div className='mt-[100px] bg-[#F7F8F9] '>
      <div className='ml-[8%]'>
        <p className='text-[36px] pt-[50px] font-[700]'>Пайвандхои муфид</p>
      </div>

    <div className='lg:w-[84%] m-[auto] flex gap-[20px] mt-[50px] flex-wrap '>
      <div className='lg:w-[23.7%] sm:w-[60%]  sm:m-[auto]  bg-[white]'>
        <img src={icon1} className='pt-[24px] ml-[24px] ' alt="" />
        <p className='w-[90%] m-[auto] text-[22px] mt-[48px]'>Таъмини истиқлолияти энергетики</p>
        <p className='w-[90%] m-[auto] mt-[10px] pb-[10px]'>Не следует, однако, забывать, что перспективное планирование позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности.</p>
      </div>

      <div className='lg:w-[23.7%] sm:w-[60%]  sm:m-[auto]  bg-[white]'>
      <img src={icon2} className='pt-[40px] ml-[40px] ' alt="" />
      <p className='w-[90%] m-[auto] text-[22px] mt-[16px]'>Баромадан аз бумбасти камуникатсионӣ</p>
      <p className='w-[90%] m-[auto] mt-[10px] pb-[10px]'>Не следует, однако, забывать, что перспективное планирование позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности.</p>
      </div>

      <div className='lg:w-[23.7%] sm:w-[60%]  sm:m-[auto]  bg-[white]'>
      <img src={icon3} className='pt-[24px] ml-[24px] ' alt="" />
        <p className='w-[90%] m-[auto] text-[22px] mt-[48px]'>Таъмини амнияти озуқавори</p>
        <p className='w-[90%] m-[auto] mt-[10px] pb-[10px]'>Не следует, однако, забывать, что перспективное планирование позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности.</p>

      </div>

      <div className='lg:w-[23.7%] sm:w-[60%]  sm:m-[auto]  bg-[white]'>
      <img src={icon4} className='pt-[24px] ml-[24px] ' alt="" />
        <p className='w-[90%] m-[auto] text-[22px] mt-[48px]'>Саноатикунонии босуръати кишвар</p>
        <p className='w-[90%] m-[auto] mt-[10px] pb-[10px]'>Не следует, однако, забывать, что перспективное планирование позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности.</p>

      </div>

    </div>

    <div>
      <p className='mt-[90px] ml-[8%] font-[700] text-[32px] sm:text-center lg:text-left'>Фехристи субъектхои дорои манфиати умум ар руи минтакахо</p>
    </div>

    <div className='lg:flex pb-[100px] w-[80%] m-[auto] gap-[100px] items-center  justify-center '>
      <div className='lg:w-[27%]  mt-[50px]'>
        <div className='w-[340px] bg-[white] rounded-[8px] '>
          <img src={mufid} className='relative bottom-[30px] right-[40px]' alt="" />
          <p className='pr-[30px] mt-[-40px] float-right text-[20px] font-[500]'>муфид</p>
          <p className='w-[90%] m-[auto] pb-[30px]'>Не следует, однако, забывать, что перспективное планирование позволяет оценить значение экспериментов, поражающих по своей масштабности и </p>
        </div>

        <div className='w-[340px] bg-[white] rounded-[8px] mt-[70px] '>
          <img src={mufid} className='relative bottom-[30px] right-[40px]' alt="" />
          <p className='pr-[30px] mt-[-40px] float-right text-[20px] font-[500]'>муфид</p>
          <p className='w-[90%] m-[auto] pb-[30px]'>Не следует, однако, забывать, что перспективное планирование позволяет оценить значение экспериментов, поражающих по своей масштабности и </p>
        </div>
      </div>

      <div className='lg:w-[27%] '>
        <img src={diagrama} alt="" />
      </div>
      
      <div className='lg:w-[27%] '>

      <div className='w-[340px] bg-[white] rounded-[8px] mt-[70px] '>
          <img src={mufid} className='relative bottom-[30px] right-[40px]' alt="" />
          <p className='pr-[30px] mt-[-40px] float-right text-[20px] font-[500]'>муфид</p>
          <p className='w-[90%] m-[auto] pb-[30px]'>Не следует, однако, забывать, что перспективное планирование позволяет оценить значение экспериментов, поражающих по своей масштабности и </p>
        </div>

        <div className='w-[340px] bg-[white] rounded-[8px] mt-[70px] '>
          <img src={mufid} className='relative bottom-[30px] right-[40px]' alt="" />
          <p className='pr-[30px] mt-[-40px] float-right text-[20px] font-[500]'>муфид</p>
          <p className='w-[90%] m-[auto] pb-[30px]'>Не следует, однако, забывать, что перспективное планирование позволяет оценить значение экспериментов, поражающих по своей масштабности и </p>
        </div>
      </div>
    </div>
  </div>


    <div className='mt-[100px] '>
      <div className='w-[80%] m-[auto] bg-[#18315C] rounded-[8px]'>
        <div className='flex'>
            <div className='lg:w-[50%] pb-[96px] sm:text-center lg:text-left'>
              <p className='text-[white]  text-[32px] font-[700] pt-[96px] lg:ml-[40px]'>Иттилоот вобаста ба пешгирии ҳолатҳои коррупсиони</p>
              <button className='w-[200px] h-[40px] bg-[white] rounded-[8px] mt-[20px]  lg:ml-[40px]'>Бо мо тамос гиред</button>
            </div> 
            
            <div className='w-[50%] lg:block sm:hidden'>
              <img src={flag2} className='w-[100%] mt-[84px]' alt="" />
            </div>
        </div>
      </div>
    </div>


    <div className='mt-[100px] w-[80%] m-[auto] bg-[#F7F8F9] '>
      <p className='text-[32px] font-[500] ml-[40px] pt-[96px] sm:text-center lg:text-left'>Часто задаваемые вопросы</p>
      <div className='lg:flex  justify-center rounded-[8px] items-center'>
        <div className='lg:w-[45%]'>
          <img src={vopros} className='pt-[56px] pb-[96px] lg:m-[0] sm:m-[auto]' alt="" />
        </div> 
        
        <div className='lg:w-[45%] sm:w-[80%] mt-[-60px] sm:m-[auto] lg:m-[0]'>
        <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>  Дар бораи Корхона?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mt-[30px] rounded-[10px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Дар бораи Корхона?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='mt-[30px] rounded-[10px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Дар бораи Корхона?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion className='mt-[30px] rounded-[10px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Дар бораи Корхона?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion className='mt-[30px] rounded-[10px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Дар бораи Корхона?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </div>
        </div>
      </div>
    </div>


    <div className='mt-[100px] '>
      <div>
        <p className='text-[36px] font-[700] lg:ml-[10%] mb-[20px] sm:text-center lg:text-left'>Бо мо тамос гиред</p>
      </div>
 
    <div className='w-[80%] m-[auto] lg:flex gap-[40px] '>
      <div className='lg:w-[48%] bg-[#F7F8F9] pb-[25px]'>
        <input className='outline-none bg-[#F7F8F9] border-2 rounded-[4px] h-[50px] p-[10px] w-[90%] ml-[6%] mt-[20px]' type="text" placeholder='Ному насаб' /><br />
        <input className='outline-none bg-[#F7F8F9] border-2 rounded-[4px] h-[50px] p-[10px] w-[90%] ml-[6%] mt-[20px]' type="text"  placeholder='Введите ваш номер телефона'/><br />
        <input className='mt-[20px] h-[225px] w-[90%] rounded-[4px] ml-[6%] bg-[#F7F8F9] border-2 outline-none pb-[170px] pl-[10px] ' type="text" placeholder='Напишите что нибудь' />
        <button className='w-[90%] ml-[6%] h-[56px] rounded-[8px] mt-[50px] bg-[#18315C] text-[white]'>Отправить</button>
      </div>
      <div className='lg:w-[48%] '>
        <img src={map}  className='sm:w-[100%] sm:mt-[20px] lg:mt-[0]' alt="" />
      </div>
    </div>

    </div>

    <div className='mt-[100px] '>
      <div className='w-[80%] justify-between  m-[auto] flex gap-[150px] flex-wrap ' >
        <div className='flex gap-[30px] items-center '>
          <div>
          <img src={locationn} alt="" />
          </div>
          <div>
            <p className='text-[22px] font-[700]'>Адрес</p>
            <p>ш.Душанбе, куч.Шероз 35</p>
          </div>

        </div>

        <div className='flex gap-[30px] items-center'>
          <div>
          <img src={email} alt="" />
          </div>
          <div>
            <p className='text-[22px] font-[700]'>Почта</p>
            <p>info@dfo.tj</p>
          </div>

        </div>

        <div className='flex gap-[30px] items-center'>
          <div>
          <img src={phone} alt="" />
          </div>
          <div>
            <p className='text-[22px] font-[700]'>Телефон</p>
            <p>221-51-59</p>
          </div>

        </div>
      </div>
    </div>


    <div className=' bg-[#F7F8F9] pb-[50px] mt-[50px] '>

      <div>
        <p className='text-[32px] pt-[100px] lg:ml-[8%] pb-[30px] sm:text-center lg:text-left' >Сайты государственных органов</p> 
      </div>
      <Marquee>
        <div>
        <img src={slider1} alt="" />
        </div>
        <div>
        <img src={slider2} alt="" />
        </div>
        <div>
        <img src={slider3} alt="" />
        </div>

        <div>
        <img src={slider4} alt="" />
        </div>

        <div>
        <img src={slider1} alt="" />
        </div>

        <div>
        <img src={slider2} alt="" />
        </div>

        <div>
        <img src={slider3} alt="" />
        </div>

        <div>
        <img src={slider4} alt="" />
        </div><div>
        <img src={slider1} alt="" />
        </div>
      </Marquee>
    </div>

    


    </div>
  )
}

export default App