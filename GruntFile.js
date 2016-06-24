module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'ukr.net/style.css': 'ukr.net/stylesheet.scss'       // 'destination': 'source'
                    
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);


};