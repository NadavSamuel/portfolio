import httpService from './httpService';

export const projectService = {
    loadProjects,
    getById
}

async function loadProjects(){
    return httpService.get('project')

}
function getById(id) {
    return httpService.get(`project/${id}`)
}

