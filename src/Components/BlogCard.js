import React, { useState } from 'react'

const BlogCard = () => {

  const img = "https://images.unsplash.com/photo-1708533548050-16703eff12ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
  return (<div className='grid grid-cols-1 place-items-center gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   px-[4%] py-[14rem] '>


    <div className="group  flex flex-col overflow-hidden  h-[25rem]  border-[.1px] border-solid border-sky-500 rounded-2xl border-opacity-[.7] ">
      <img className="w-full h-[50%] object-fill" src={img} alt="" />
      <div className=" w-full h-full bottom-[-50%] opacity-1 color-white" >display Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi natus, in aperiam, quas incidunt quisquam enim quidem at, suscipit fuga magnam adipisci hic explicabo ea iste minima. Accusantium suscipit sunt magnam at aut repellat, quidem officiis ratione? Adipisci facere illum odit laudantium tempora amet, laboriosam, iste fugit harum aperiam qui doloremque neque quam voluptate explicabo quos quaerat, ipsa natus nulla illo modi veritatis accusantium nostrum earum. Sapiente reiciendis quibusdam ipsam, consectetur quasi exercitationem similique vero quia libero, itaque impedit adipisci omnis nemo ut quo maxime incidunt consequuntur modi perspiciatis, temporibus dolores quod. Earum harum id, beatae sapiente animi consequatur odit accusantium unde sint quos iusto ea atque hic sunt laudantium nesciunt reiciendis dicta, autem quas. Magni, ducimus quidem tempora aut vero voluptatem, voluptates facere, nulla dignissimos explicabo autem. Sequi odio unde ratione maxime quos, eius beatae placeat odit, itaque, ipsam quod. Quibusdam nihil modi ipsum debitis sit provident commodi officiis consectetur distinctio perferendis, ducimus, eligendi odit obcaecati in, quod quo molestias saepe dicta enim. Quia, quae hic assumenda excepturi aliquid adipisci debitis, neque error, suscipit ducimus similique facere doloribus earum eveniet officiis voluptatum blanditiis obcaecati dicta qui soluta cum nesciunt ipsum fugit molestiae. Illum a nam praesentium, nostrum, minus ex obcaecati iste unde et laudantium ut adipisci itaque temporibus fugit perferendis illo fugiat quos placeat sint possimus vel cupiditate delectus! Quidem aperiam porro debitis saepe? Error debitis ipsa rem excepturi labore deserunt fugit laborum.  quibusdam, necessitatibus excepturi a deleniti officia nihil possimus porro illum blanditiis incidunt molestiae! </div>

    </div>
    <div className="group  flex flex-col overflow-hidden  h-[25rem]  border-[.1px] border-solid border-sky-500 rounded-2xl border-opacity-[.7] ">
      <img className="w-full h-[50%] object-fill" src={img} alt="" />
      <div className=" w-full h-full bottom-[-50%] opacity-1 color-white" >display Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi natus, in aperiam, quas incidunt quisquam enim quidem at, suscipit fuga magnam adipisci hic explicabo ea iste minima. Accusantium suscipit sunt magnam at aut repellat, quidem officiis ratione? Adipisci facere illum odit laudantium tempora amet, laboriosam, iste fugit harum aperiam qui doloremque neque quam voluptate explicabo quos quaerat, ipsa natus nulla illo modi veritatis accusantium nostrum earum. Sapiente reiciendis quibusdam ipsam, consectetur quasi exercitationem similique vero quia libero, itaque impedit adipisci omnis nemo ut quo maxime incidunt consequuntur modi perspiciatis, temporibus dolores quod. Earum harum id, beatae sapiente animi consequatur odit accusantium unde sint quos iusto ea atque hic sunt laudantium nesciunt reiciendis dicta, autem quas. Magni, ducimus quidem tempora aut vero voluptatem, voluptates facere, nulla dignissimos explicabo autem. Sequi odio unde ratione maxime quos, eius beatae placeat odit, itaque, ipsam quod. Quibusdam nihil modi ipsum debitis sit provident commodi officiis consectetur distinctio perferendis, ducimus, eligendi odit obcaecati in, quod quo molestias saepe dicta enim. Quia, quae hic assumenda excepturi aliquid adipisci debitis, neque error, suscipit ducimus similique facere doloribus earum eveniet officiis voluptatum blanditiis obcaecati dicta qui soluta cum nesciunt ipsum fugit molestiae. Illum a nam praesentium, nostrum, minus ex obcaecati iste unde et laudantium ut adipisci itaque temporibus fugit perferendis illo fugiat quos placeat sint possimus vel cupiditate delectus! Quidem aperiam porro debitis saepe? Error debitis ipsa rem excepturi labore deserunt fugit laborum.  quibusdam, necessitatibus excepturi a deleniti officia nihil possimus porro illum blanditiis incidunt molestiae! </div>

    </div>
    <div className="group  flex flex-col overflow-hidden  h-[25rem]  border-[.1px] border-solid border-sky-500 rounded-2xl border-opacity-[.7] ">
      <img className="w-full h-[50%] object-fill" src={img} alt="" />
      <div className=" w-full h-full bottom-[-50%] opacity-1 color-white" >display Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi natus, in aperiam, quas incidunt quisquam enim quidem at, suscipit fuga magnam adipisci hic explicabo ea iste minima. Accusantium suscipit sunt magnam at aut repellat, quidem officiis ratione? Adipisci facere illum odit laudantium tempora amet, laboriosam, iste fugit harum aperiam qui doloremque neque quam voluptate explicabo quos quaerat, ipsa natus nulla illo modi veritatis accusantium nostrum earum. Sapiente reiciendis quibusdam ipsam, consectetur quasi exercitationem similique vero quia libero, itaque impedit adipisci omnis nemo ut quo maxime incidunt consequuntur modi perspiciatis, temporibus dolores quod. Earum harum id, beatae sapiente animi consequatur odit accusantium unde sint quos iusto ea atque hic sunt laudantium nesciunt reiciendis dicta, autem quas. Magni, ducimus quidem tempora aut vero voluptatem, voluptates facere, nulla dignissimos explicabo autem. Sequi odio unde ratione maxime quos, eius beatae placeat odit, itaque, ipsam quod. Quibusdam nihil modi ipsum debitis sit provident commodi officiis consectetur distinctio perferendis, ducimus, eligendi odit obcaecati in, quod quo molestias saepe dicta enim. Quia, quae hic assumenda excepturi aliquid adipisci debitis, neque error, suscipit ducimus similique facere doloribus earum eveniet officiis voluptatum blanditiis obcaecati dicta qui soluta cum nesciunt ipsum fugit molestiae. Illum a nam praesentium, nostrum, minus ex obcaecati iste unde et laudantium ut adipisci itaque temporibus fugit perferendis illo fugiat quos placeat sint possimus vel cupiditate delectus! Quidem aperiam porro debitis saepe? Error debitis ipsa rem excepturi labore deserunt fugit laborum.  quibusdam, necessitatibus excepturi a deleniti officia nihil possimus porro illum blanditiis incidunt molestiae! </div>

    </div>
    <div className="group  flex flex-col overflow-hidden  h-[25rem]  border-[.1px] border-solid border-sky-500 rounded-2xl border-opacity-[.7] ">
      <img className="w-full h-[50%] object-fill" src={img} alt="" />
      <div className=" w-full h-full bottom-[-50%] opacity-1 color-white" >display Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi natus, in aperiam, quas incidunt quisquam enim quidem at, suscipit fuga magnam adipisci hic explicabo ea iste minima. Accusantium suscipit sunt magnam at aut repellat, quidem officiis ratione? Adipisci facere illum odit laudantium tempora amet, laboriosam, iste fugit harum aperiam qui doloremque neque quam voluptate explicabo quos quaerat, ipsa natus nulla illo modi veritatis accusantium nostrum earum. Sapiente reiciendis quibusdam ipsam, consectetur quasi exercitationem similique vero quia libero, itaque impedit adipisci omnis nemo ut quo maxime incidunt consequuntur modi perspiciatis, temporibus dolores quod. Earum harum id, beatae sapiente animi consequatur odit accusantium unde sint quos iusto ea atque hic sunt laudantium nesciunt reiciendis dicta, autem quas. Magni, ducimus quidem tempora aut vero voluptatem, voluptates facere, nulla dignissimos explicabo autem. Sequi odio unde ratione maxime quos, eius beatae placeat odit, itaque, ipsam quod. Quibusdam nihil modi ipsum debitis sit provident commodi officiis consectetur distinctio perferendis, ducimus, eligendi odit obcaecati in, quod quo molestias saepe dicta enim. Quia, quae hic assumenda excepturi aliquid adipisci debitis, neque error, suscipit ducimus similique facere doloribus earum eveniet officiis voluptatum blanditiis obcaecati dicta qui soluta cum nesciunt ipsum fugit molestiae. Illum a nam praesentium, nostrum, minus ex obcaecati iste unde et laudantium ut adipisci itaque temporibus fugit perferendis illo fugiat quos placeat sint possimus vel cupiditate delectus! Quidem aperiam porro debitis saepe? Error debitis ipsa rem excepturi labore deserunt fugit laborum.  quibusdam, necessitatibus excepturi a deleniti officia nihil possimus porro illum blanditiis incidunt molestiae! </div>

    </div>
    <div className="group  flex flex-col overflow-hidden  h-[25rem]  border-[.1px] border-solid border-sky-500 rounded-2xl border-opacity-[.7] ">
      <img className="w-full h-[50%] object-fill" src={img} alt="" />
      <div className=" w-full h-full bottom-[-50%] opacity-1 color-white" >display Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi natus, in aperiam, quas incidunt quisquam enim quidem at, suscipit fuga magnam adipisci hic explicabo ea iste minima. Accusantium suscipit sunt magnam at aut repellat, quidem officiis ratione? Adipisci facere illum odit laudantium tempora amet, laboriosam, iste fugit harum aperiam qui doloremque neque quam voluptate explicabo quos quaerat, ipsa natus nulla illo modi veritatis accusantium nostrum earum. Sapiente reiciendis quibusdam ipsam, consectetur quasi exercitationem similique vero quia libero, itaque impedit adipisci omnis nemo ut quo maxime incidunt consequuntur modi perspiciatis, temporibus dolores quod. Earum harum id, beatae sapiente animi consequatur odit accusantium unde sint quos iusto ea atque hic sunt laudantium nesciunt reiciendis dicta, autem quas. Magni, ducimus quidem tempora aut vero voluptatem, voluptates facere, nulla dignissimos explicabo autem. Sequi odio unde ratione maxime quos, eius beatae placeat odit, itaque, ipsam quod. Quibusdam nihil modi ipsum debitis sit provident commodi officiis consectetur distinctio perferendis, ducimus, eligendi odit obcaecati in, quod quo molestias saepe dicta enim. Quia, quae hic assumenda excepturi aliquid adipisci debitis, neque error, suscipit ducimus similique facere doloribus earum eveniet officiis voluptatum blanditiis obcaecati dicta qui soluta cum nesciunt ipsum fugit molestiae. Illum a nam praesentium, nostrum, minus ex obcaecati iste unde et laudantium ut adipisci itaque temporibus fugit perferendis illo fugiat quos placeat sint possimus vel cupiditate delectus! Quidem aperiam porro debitis saepe? Error debitis ipsa rem excepturi labore deserunt fugit laborum.  quibusdam, necessitatibus excepturi a deleniti officia nihil possimus porro illum blanditiis incidunt molestiae! </div>

    </div>
   

  </div>
  )
}

export default BlogCard