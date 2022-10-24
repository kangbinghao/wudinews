// 封装请求对象
const BASE_URL=`https://www.fastmock.site/mock/6f916a98901b738248e18d3588eb460f/wudinews`
function request({url,data,method}){
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL+url,
			method,
			data,
			success: ({data,statusCode,header}) => {
				if(data.success){
					// 请求成功
					resolve(data)
				}else{
					// 请求失败
					nui.showToast({
						title:data.message,
						icon:"none",
						mask:true,
						duration:3000
					})
					reject(data.message)
				}
			},
			fail: (error) => {
				reject(error)
			},
			complete: () => {}
		});
	})
}
export default request;