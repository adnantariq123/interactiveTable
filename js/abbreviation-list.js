// Place on a local html page

// bm.ready(function (_event, _scope) {
//         _scope.buildAbbr(_array, _target);

//     })

// Abbreviation List
bm.abbrKeyList = {

// A --
'AF':     'AF = atrial fibrillation',
'ANT':    'ANT = antagonist',
'ARR':    'ARR = absolute risk reduction',
'ACE':    'ACE = angiotensin-converting-enzyme inhibitor',
'ARB':    'ARB = angiotensin receptor blocker',
'ASA':	  'ASA = aspirin',
// C --
'CAD':		'CAD = coronary artery disease',
'CMS':		'CMS = centers for medicare and medicaid services',
'CI':       'CI = confidence interval',

'CHADS':'CHADS<sub>2</sub> = congestive heart failure, hypertension, age (≥ 75 years), diabetes mellitus, prior stroke/transient ischemic attack or thromboembolism',

'CHAVASc':'CHA<sub>2</sub>DS<sub>2</sub>-VASc = congestive heart failure, hypertension, age (≥75 years), diabetes mellitus, prior stroke/transient ischemic attack or thromboembolism, vascular disease, age (65-74 years), sex category',

'CHAD_Score':'CHADS<sub>2</sub> Score = congestive heart failure, hypertension, age (≥75 years), diabetes mellitus, prior stroke/transient ischemic attack or thromboembolism',

'CHF':      'CHF = congestive heart failure',
'CKD':        'CKD = chronic kidney disease',
'CPH':        'CPH = cox proportional hazards',

// D --
'DOAC':     'DOAC = direct oral anticoagulant',
'DVT':      'DVT = deep vein thrombosis',

// G --
'GI':       'GI = gastrointestinal',

//H --
'HAS-BLED': 'HAS-BLED = hypertension, abnormal renal/liver function, stroke, bleeding history or predisposition, labile international normalized ratio, elderly, drugs and alcohol',
'HR':       'HR = hazard ratio',

// I --
'ICH':       'ICH = intracranial hemorrhage',
'IR':       'IR = incidence rate',
'IQR':      'IQR = interquartile range',
'INR':      'INR = international normalized ratio',

//M --
'MB':		'MB = major bleeding',
// N --
'NA':       'NA = not available',
'NNH':      'NNH = number needed to harm',
'NSAID':    'NSAID = nonsteroidal anti-inflammatory drug',
'NVAF':     'NVAF = non-valvular atrial fibrillation',

//O --
'OAC' :		'OAC = oral anticoagulant',
'OTC' :		'OTC = over-the-counter',
// p --
'PE':       'PE = pulmonary embolism',
'PSM':      'PSM = propensity score matching',
'PAD':      'PAD = peripheral artery disease',

// S --
'SD':       'SD = standard deviation',
'S/SE':		'S/SE = stroke/systemic embolism',
'SE':       'SE = systemic embolism',


// T --
'TIA':      'TIA = transient ischemic attack',

// V --
'VTE':      'VTE = venous thromboembolism',
 
// Y --
'yrs':        'yrs = years'
};

bm.scope(function () {

    this.buildAbbr = function (_abbrArray, _target) {

        var arrbList;

        if (_abbrArray && _target) {
            
            // Create an abbreviation definition array 
            arrbList = _abbrArray.map((keyWord) => {
                var abbrItem = bm.abbrKeyList[keyWord],
                    $abbrObj = $('<li>').addClass('abbr_keyword').html(abbrItem);

                // console.log($abbrObj);
                // console.log(abbrItem);
                return $abbrObj;
            })

            var $abbr_grouped = $('<ul>').addClass('abbr_group').html(arrbList);
            $(_target).html($abbr_grouped);
        }
        else {
            throw new Error("Check the Abbr. list array or the target div");
        }

    };

});