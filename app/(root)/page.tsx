import SearchForm from "@/components/SearchForm";

export default async function Home({searchParams}:{
    searchParams:Promise<{Startup?:string}>
}) {

    const Startup = (await searchParams).Startup ;
  return (
   <>
       <section className='pink_container'>
           <h1 className='heading'>Pitch Your Startup,
           <br/> Connect With Enterpreneurs
           </h1>
              <p className='sub-heading !max-w-3xl' >
                    Submit your startup to the largest community of enterpreneurs and investors and
                   Get Noticed in virtual Competitions.
              </p>
           <SearchForm Startup={Startup}/>
       </section>

   </>
  );
}
