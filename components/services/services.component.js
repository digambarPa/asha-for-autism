define(["app", "angular"],
    function (module, angular) {

        var servicesComponent = {
            template: `<div class="row">

            <div class="col-sm-6">
                <div class="services"></div>
                <div class="info info-left services-info">
                    <h3>Assessment, Training and Guidance Centre</h3>
                   <p>The Diagnostic and Family Services Centre of ASHA offers a range of services for children, families and teachers. The services include comprehensive medical, psychological, developmental, family and social, psycho-educational and academic assessments for children with learning problems, attention deficit and hyperactivity disorders, Autism Spectrum Disorders, delayed development and poor academic performance.?Assessments can objectively identify areas of skill, strength and need; they can rule-out or confirm suspicions and identify targets for treatment and intervention for autism, learning disability and other developmental delays.</p>
                   <h3>Assessments available at the Centre:</h3>
                   <ul>
                    <li>Development Checklist.</li>
                    <li>Basic Skills Checklist.</li>
                    <li>Brigance Test of Basic Skills.</li>
                    <li>PEP-R- Psycho-Educational Profile- Revised.</li>
                    <li>TTAP -TEEACH Transitional Assessment Profile.</li>
                    <li>VABS - Vineland Adaptive Behavior Scale.</li>
                    <li>Beery VMI - Development test of Visual-Motor Integration.</li>
                    <li>Ecological Intervention for children with Movement Difficulties.</li>
                    <li>Occupational therapy assessment</li>
                    <li>Physiotherapy assessment</li>
                    <li>Speech assessment.</li>
                   </ul>
                   <h3>Other services provided:</h3>
                    <ul>
                        <li>Child guidance and home-based program.</li>
                        <li>Social skills training</li>
                        <li>Remedial training</li>
                        <li>Behaviour Management Program</li>
                        <li>Art Based Therapy</li>
                        <li>Computer and Ipad Training</li>
                        <li>Hobby classes</li>
                        <li>Counseling service</li>
                        <li>Teacher training.</li>
                        <li>Awareness generation programs.</li>
                        <li>Lectures, demonstrations and workshops.</li>
                        <li>Guidance for inclusive education.</li>
                    </ul>
                    <p>A large team of therapists, special educators, psychologists and counselors form the professional team of ASHA.
A child can overcome a wide range of developmental, behavioral and learning problems if detected early and intervened. Empowering parents and teachers is a very important part of this process.</p>
                </div>
                <div></div>
            </div>

            <div class="col-sm-6">
                <div class="info intervention">
                    <h2 style="text-align: center">Early Intervention</h2>
                    <p>Developmental disabilities in children are on the rise and there is much that needs to be understood, from cause to cure. However, there is one widely accepted fact: Early and intensive intervention can have a profound impact on the quality of life for both children at risk and their families.</p>
                    <p>The early intervention unit addresses the needs of children under the age of 6 years. Children with various disabilities like cerebral palsy, developmental delay and autism spectrum disorder come to this centre.</p>
                    <p>Individual sessions for 1 hour and 3 hour sessions are available. Multi therapy intervention is available. The therapies covered are speech / language, physiotherapy, occupational therapy, special education, arts based therapy and yoga. Training is also given to the parents of these young children so that they can continue the structured teaching at home too.</p>
                </div>

                <div class="info training">
                    <h3 style="text-align: center">Training for parents and teachers</h3>
                    <p>Training is a very crucial part of the work that is done at ASHA.</p>
                    <p>Training parents -There is a lot of opportunity for training and early intervention is key to a child's progress. A three month parent training course is offered every year where parents understand the various aspects of autism spectrum disorders and also work with their children under the guidance of trained teachers. Parents are encouraged to observe the techniques followed at ASHA.</p>
                    <p>Teacher's training - Updating the teachers knowledge is an integral part of training the teachers and every April, a 3 week course is held for the teachers. The teachers regularly attend various seminars and conferences and interact with other professionals in the field.</p>
                    <p>Home based training -One of the unique programmes at ASHA is the facility of teachers going to parent's houses and showing them various techniques to work with their child in their home environment. This allows parents to understand the potential of the child outside of a school setting.</p>
                </div>

                <div class="info intervention">
                    <h2 style="text-align: center">Vocational training</h2>
                    <p>Vocational training is basically training children in those skills which will help them become employable. The vocational skills that we teach include - </p>
                    <ul>
                        <li>Embroidery and stiching.</li>
                        <li>Painting</li>
                        <li>Jewellery making</li>
                        <li>Computer data entry</li>
                        <li>Horticulture</li>
                        <li>Vocational training is very important as it helps the young adult to identify skills that will make them employable and to lead an independent life.</li>
                        <li>We also help in guiding the parents on what is the best vocation for their child.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-sm-12">
                <div class="info education-info">
                    <h3 style="text-align: center">Primary Education</h3>
                    <p>The primary education centre works with children above the age of six who have been diagnosed with Autism Spectrum Disorder.</p>
                    <p>A full day programme is provided from 10am to 4pm.</p>
                    <p>A well rounded and holistic curriculum with an individual programme along with adequate adult support (1:2 teacher student ratios) is provided at the day care centre.</p>
                    <p>We provide the below mentioned therapies - </p>
                    <ul>
                        <li>speech / language,</li>
                        <li>physiotherapy,</li>
                        <li>occupational therapy,</li>
                        <li>special education,</li>
                        <li>dance,</li>
                        <li>arts based therapy</li>
                        <li>yoga.</li>
                    </ul>

                    <p>Academic, non-academic and life skills training are taught using multiple teaching methods like</p>

                    <ul>
                        <li>structured teaching,</li>
                        <li>positive behavior support,</li>
                        <li>use of social stories and</li>
                        <li>visual communication. </li>
                    </ul>
                    <p>The students are also trained in</p>
                    <ul>
                        <li>computer skills,</li>
                        <li>daily living skills like housekeeping and cooking and</li>
                        <li>prevocational skills like screen and block printing, paper bag making and making other art and craft items.</li>
                    </ul>
                </div>
            </div>
        </div>
        `,

            controller: [function () {

            }]
        };

        angular.module(module.HOME)
            .component('servicesComponent', servicesComponent)
            .config(function ($stateProvider) {
                $stateProvider
                    .state("services", {
                        url: "/services",
                        component: 'servicesComponent'
                    });
            });
    });