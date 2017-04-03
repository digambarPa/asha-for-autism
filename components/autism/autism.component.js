define(["app", "angular"], function(module, angular) {

    var autismComponent = {
        template: `
                        <div class="row">

                <div class="col-sm-5">
                    <div class="autism"></div>
                    <div class="info trustee-info">
                        <h3>Some useful links about AUTISM</h3>
                        <ul>
                            <li>
                                <a href="http://www.autism-india.org" target="_blank">http://www.autism-india.org</a>
                            </li>
                            <li>
                                <a href="http://www.ashaforautism.com" target="_blank">http://www.ashaforautism.com</a>
                            </li>
                            <li>
                                <a href="http://www.kpamrc.com" target="_blank">http://www.kpamrc.com</a>
                            </li>
                            <li>
                                <a href="http://www.autism.com" target="_blank">http://www.autism.com</a>
                            </li>
                            <li>
                                <a href="http://www.autism-resources.com" target="_blank">http://www.autism-resources.com</a>
                            </li>
                            <li>
                                <a href="http://www.autism-info.com" target="_blank">http://www.autism-info.com</a>
                            </li>
                            <li>
                                <a href="http://www.autism.clarityconnect.com" target="_blank">http://www.autism.clarityconnect.com</a>
                            </li>
                            <li>
                                <a href="http://www.patientcenters.com/autism" target="_blank">http://www.patientcenters.com/autism</a>
                            </li>
                            <li>
                                <a href="http://www.autismndi.com" target="_blank">http://www.autismndi.com</a>
                            </li>
                            <li>
                                <a href="http://www.autism-alabama.org" target="_blank">http://www.autism-alabama.org</a>
                            </li>
                            <li>
                                <a href="http://www.learn4autism.com" target="_blank">http://www.learn4autism.com</a>
                            </li>
                            <li>
                                <a href="www.deakin.edu.au/research/stories/2013/07/09/toby-playpad-in-india" target="_blank">www.deakin.edu.au/research/stories/2013/07/09/toby-playpad-in-india</a>
                            </li>
                            <li>
                                <a href="www.youtube.com/watch?v=oSC1LyOGUMU" target="_blank">www.youtube.com/watch?v=oSC1LyOGUMU</a>
                            </li>
                            <li>
                                <a href="http://www.autism.net" target="_blank">http://www.autism.net</a>
                            </li>

                            <li>
                                <a href="www.thenationaltrust.co.in/nt/images/stories/Disability/autism.pd" target="_blank"www.thenationaltrust.co.in/nt/images/stories/Disability/autism.pd></a>
                            </li>
                            <li>
                                <a href="http://www.autism-uk.ed.ac.uk" target="_blank">http://www.autism-uk.ed.ac.uk</a>
                            </li>
                            <li>
                                <a href="http://members.spree.com/autism" target="_blank">http://members.spree.com/autism</a>
                            </li>

                        </ul>
                    </div>
                    <div></div>
                </div>

                <div class="col-sm-5">
                    <div class="info mission">
                        <h2 style="text-align: center">Autism</h2>
                        <p>AUTISM is a life long developmental disability that typically appears in the first three years of life. It is primarily a neurological disorder that affects the functioning of the brain. It has been found throughout the world in families of all racial, ethnic and social backgrounds. Autism is four times more common in boys than in girls.</p>
                    </div>

                    <div class="info goals">
                        <ul>
                            <li>Autism is a neuro-developmental disorder that affects the way a person communicates and relates to people around him / her.
                            </li>
                            <li>Children and adults with autism have difficulties in language and communication, social interaction, imitation, imagination and also some behavioural challenges.</li>
                            <li>Autism generally occurs in the first three years of life and is more common in boys than girls. For every 4 boys that are affected with autism, only 1 girl is diagnosed with autism.</li>
                            <li>It is called Autism Spectrum Disorder as there is a wide range of ability and disability.There is currently no known cause for autism.Autism is a lifelong disability.</li>
                            <li>There is currently no known cause for autism.</li>

                            <li>Autism is a lifelong disability.</li>
                            <li>1 in 150 people are being diagnosed with autism spectrum disorders.</li>
                            <li>Autism is a global problem and the incidence is increasing worldwide. More children will be diagnosed with autism this year than with AIDS, juvenile diabetes and pediatric cancer combined!!</li>
                            <li>According to Centre for Disease Control and Prevention, about 1 in 88 children have been identified with an Autism Spectrum Disorder.</li>

                            <li>Autism occurs in every class, culture and family background.</li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-2">
                    <div class="flower">

                    </div>
                </div>

            </div>
        `,

        controller: [function() {}]
    };

    angular
        .module(module.AUTISM)
        .component('autismComponent', autismComponent)
        .config(function($stateProvider) {
            $stateProvider
                .state("autism", {
                    url: "/autism",
                    component: 'autismComponent'
                });
        });
});