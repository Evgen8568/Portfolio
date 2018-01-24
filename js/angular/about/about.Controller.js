(function(){
	angular
	.module('app')
	.controller('aboutController', aboutController);
	
	aboutController.inject =['$scope' , '$sessionStorage']
	function aboutController($scope, $sessionStorage) {
		$scope.model = {
			name: 'Русецкий Евгений Анатольевич',
			birthday: '13.08.88',
			education: 'Высшее(БГУИР)'
		}
		
		 $scope.video = {
            time: $sessionStorage.videoTime || 0,
            sources: [{
                type: 'video/mp4',
                src: 'http://techslides.com/demos/sample-videos/small.mp4' 
				/*video/mp4',
                src: 'https://r5---sn-cxauxaxjvh-hn9k.googlevideo.com/videoplayback?source=youtube&mime=video%2Fmp4&mn=sn-cxauxaxjvh-hn9k&key=yt6&id=o-AM7IWqL29-gsdS7AzwxWiVPXYtDGbncSXvyZMxGLjpeY&ipbits=0&initcwndbps=645000&mv=m&pl=19&ei=d2toWoTKL5Xn7ASfroK4DA&requiressl=yes&ms=au&ip=93.85.57.104&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&ratebypass=yes&mt=1516792614&lmt=1472349799779130&dur=177.562&itag=22&mm=31&expire=1516814296&signature=7F22A1E450F62BE2A069870454A2E8387D47AE55.11F25F1F5D9FA934B64A1903A97677B044226D2B&title=Ricki%20Hall%20-%20Supernatural*/
            }],
            onended: function () {
                $scope.video.ended = $sessionStorage.videoEnded = true;
                $scope.$apply();
            },
            ended: $sessionStorage.videoEnded,
            control: {},
            reset: function () {
                if ($scope.video.control.reset) {
                    $scope.video.control.reset()
                }

                $scope.video.ended = $sessionStorage.videoEnded = false;
            }
        };

        $scope.$watch('video.time', function (newValue) {
            $sessionStorage.videoTime = newValue;
        });
	}
})();